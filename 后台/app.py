from flask import Flask, request
from flask import jsonify
import pymysql
import time
import json
import datetime
from DBUtils.PooledDB import PooledDB

app = Flask(__name__)

MYSQL_HOST = '192.168.0.127'
USER = 'root'
PASSWORD = '123456'
DB = 'habitdb'
PORT = 3306
pool = PooledDB(pymysql, 5, host=MYSQL_HOST, user=USER, passwd=PASSWORD, db=DB, port=PORT, charset="utf8")



@app.route('/qiandao', methods=['GET', 'POST'])
def qiandao():
    hab = request.args.get("h")
    uuid = request.args.get("uuid")
    _list = []
    tag = 0
    # 先获得时间数组格式的日期
    one = (datetime.datetime.now() - datetime.timedelta(days=7))
    # 转换为时间戳
    timeStamp = int(time.mktime(one.timetuple()))
    # 转换为其他字符串格式
    one_day = one.strftime("%Y-%m-%d")

    two = (datetime.datetime.now() - datetime.timedelta(days=6))
    timeStamp = int(time.mktime(two.timetuple()))
    two_day = two.strftime("%Y-%m-%d")

    three = (datetime.datetime.now() - datetime.timedelta(days=5))
    timeStamp = int(time.mktime(three.timetuple()))
    three_day = three.strftime("%Y-%m-%d")

    four = (datetime.datetime.now() - datetime.timedelta(days=4))
    timeStamp = int(time.mktime(four.timetuple()))
    four_day = four.strftime("%Y-%m-%d")

    five = (datetime.datetime.now() - datetime.timedelta(days=3))
    timeStamp = int(time.mktime(five.timetuple()))
    five_day = five.strftime("%Y-%m-%d")

    six = (datetime.datetime.now() - datetime.timedelta(days=2))
    timeStamp = int(time.mktime(six.timetuple()))
    six_day = six.strftime("%Y-%m-%d")

    seven = (datetime.datetime.now() - datetime.timedelta(days=1))
    timeStamp = int(time.mktime(seven.timetuple()))
    seven_day = seven.strftime("%Y-%m-%d")

    today = time.strftime("%Y-%m-%d", time.localtime())

    sql1 = "SELECT * FROM calendar WHERE time=%s and uuid=%s and habittype = %s "
    conn = pool.connection()
    cur = conn.cursor()
    print(uuid, hab)
    first = cur.execute(sql1, [one_day, uuid, hab])
    if first == 0:
        _list.append(0)
    else:
        _list.append(1)
        tag = 1
    second = cur.execute(sql1, [two_day, uuid, hab])
    if second == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    third = cur.execute(sql1, [three_day, uuid, hab])
    if third == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    fourth = cur.execute(sql1, [four_day, uuid, hab])
    if fourth == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    fifth = cur.execute(sql1, [five_day, uuid, hab])
    if fifth == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    sixth = cur.execute(sql1, [six_day, uuid, hab])
    if sixth == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    seventh = cur.execute(sql1, [seven_day, uuid, hab])
    if seventh == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    todayth = cur.execute(sql1, [today, uuid, hab])
    if todayth == 0:
        _list.append(0)
        tag = 0
    else:
        _list.append(tag + 1)
        tag = tag + 1
    array = json.dumps(_list)
    print(array)
    return array


@app.route('/calendar', methods=['GET', 'POST'])  # 输入打卡的习惯类型，返回对应的已打卡日历
def calendarreturn():
    the_type = request.args.get("iconname")
    uuid = request.args.get("uuid")
    sqlcalendar = 'SELECT  distinct time FROM calendar WHERE habittype = %s and uuid = %s'
    try:
        conn = pool.connection()
        cur = conn.cursor()
        count = cur.execute(sqlcalendar, [the_type, uuid])
        a = []
        for i in range(count):
            result = cur.fetchone()
            a.append({"date": result[0], "info": "已打卡"})
    except IOError:
        conn.rollback()
        print("Error: Function happen Error: 语料数据库查询异常")
    finally:
        cur.close()
        conn.close()
        return jsonify(a)


@app.route('/yuliao', methods=['GET', 'POST'])  # 传入打卡日期和打卡的习惯类型，返回语料
def dakashijian():
    date = request.args.get("date")
    the_type = request.args.get("iconname")
    uuid = request.args.get("uuid")
    # print(date, the_type)
    sqlqian = "SELECT habittype,time,uuid FROM calendar WHERE habittype = %s and time = %s AND uuid = %s"

    sqlrili = 'INSERT INTO calendar(habittype,time,uuid) VALUES (%s,%s,%s)'

    sqlyuliao = 'SELECT word,type FROM `words` AS t1 JOIN ' \
                '( SELECT ROUND( RAND( ) * (( SELECT MAX( id ) FROM `words` ' \
                'WHERE habittype = %s ) - ( SELECT MIN( id ) FROM `words` ' \
                'WHERE habittype = %s ) ) + ( SELECT MIN( id ) FROM `words`' \
                ' WHERE habittype = %s ) ) AS id ) AS t2' \
                ' WHERE t1.id >= t2.id ' \
                'ORDER BY t1.id LIMIT 1;'
    try:
        conn = pool.connection()
        cur = conn.cursor()
        cur.execute(sqlyuliao, [the_type, the_type, the_type])
        data = cur.fetchone()
        Checked = cur.execute(sqlqian, [the_type, date, uuid])
        # print(Checked)
        if Checked:
            pass
        else:
            cur.execute(sqlrili, [the_type, date, uuid])
            conn.commit()
    except IOError:
        conn.rollback()  # 出现异常 回滚事件
        print("Error: Function happen Error: 语料数据库查询异常")
    finally:
        cur.close()
        conn.close()
        # print(data)
        return jsonify(data)


@app.route('/user_info')
def user_info():
    user = request.args.get('uuid')
    print(user)
    sql = "SELECT * FROM user_info WHERE uuid = %s"
    conn = pool.connection()
    cur = conn.cursor()
    count = cur.execute(sql, user)
    # print(sql)

    print(count)
    if count:
        cur.close()
        conn.close()
        return "1"
    else:
        # register_sql = "insert into user_info(uuid) values ('%s');" % user
        # print(register_sql)
        # cur.execute(register_sql)
        # conn.commit()
        cur.close()
        conn.close()
        return "0"


@app.route('/usermanage', methods=['GET', 'POST'])
def usermanage():
    if request.method == "POST":
        import json
        like = request.data.decode('utf-8')
        print(like, type(like))
        _list = json.loads(like)
        uuid = _list[0]
        print(uuid, type(uuid))

        conn = pool.connection()
        cur = conn.cursor()

        sql = "select * from user_info where uuid='%s'" % uuid
        try:
            res = cur.execute(sql)
            # res = cursor.execute(sql)
            print(res)
            if res:
                update = "update user_info set likes='{}' where uuid='{}'".format(like, uuid)
                print(update)
                ex1 = cur.execute(update)
                conn.commit()
                print(ex1)
                cur.close()
                conn.close()
                return "更新成功"
            else:
                register_sql = "insert into user_info(uuid) values ('%s');" % uuid
                # print(register_sql)
                cur.execute(register_sql)
                conn.commit()
                update = "update user_info set likes='{}' where uuid='{}'".format(like, uuid)
                print(update)
                ex1 = cur.execute(update)
                conn.commit()
                cur.close()
                conn.close()
                return "新用户建立成功"
        except:
            print("error 更新失败")
        finally:
            cur.close()
            conn.close()

    return "ok"


@app.route('/likes', methods=['GET', 'POST'])
def likes():
    uuid = request.data.decode('utf-8')
    sql = "select likes from user_info where uuid=%s"
    print(sql)
    try:
        conn = pool.connection()
        cur = conn.cursor()
        count = cur.execute(sql, uuid)
        data = cur.fetchall()
        data = ''.join([str(n) for t in data for n in t])
        print(data)
        cur.close()
        conn.close()
        return data
    except:
        return "error"


if __name__ == '__main__':
    app.run(
        host='0.0.0.0'
        , debug=True
    )
