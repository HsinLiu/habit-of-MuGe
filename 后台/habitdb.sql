/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : habitdb

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 08/10/2020 19:56:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for calendar
-- ----------------------------
DROP TABLE IF EXISTS `calendar`;
CREATE TABLE `calendar`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID顺序',
  `habittype` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '爱好类型',
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '打卡时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of calendar
-- ----------------------------
INSERT INTO `calendar` VALUES (1, '健身', '2019-10-2');
INSERT INTO `calendar` VALUES (2, '健身', '2019-10-3');
INSERT INTO `calendar` VALUES (3, '健身', '2019-10-4');
INSERT INTO `calendar` VALUES (4, '健身', '2019-10-4');
INSERT INTO `calendar` VALUES (5, '唱歌', '2019-10-11');
INSERT INTO `calendar` VALUES (6, '唱歌', '2019-10-11');
INSERT INTO `calendar` VALUES (9, '健身', '2019-10-11');
INSERT INTO `calendar` VALUES (10, '健身', '2019-10-11');
INSERT INTO `calendar` VALUES (11, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (12, '与家人通话', '2019-10-12');
INSERT INTO `calendar` VALUES (13, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (14, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (15, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (16, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (17, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (18, '跑步', '2019-10-12');
INSERT INTO `calendar` VALUES (19, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (20, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (21, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (22, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (23, '健身', '2019-10-12');
INSERT INTO `calendar` VALUES (24, '健身', '2019-10-12');

-- ----------------------------
-- Table structure for usersinfo
-- ----------------------------
DROP TABLE IF EXISTS `usersinfo`;
CREATE TABLE `usersinfo`  (
  `userid` int(255) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `infokey` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '键',
  `infovalue` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '值',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usersinfo
-- ----------------------------
INSERT INTO `usersinfo` VALUES (1, 'Avatar', '../../../static/vippage/vipicon/heart.png');
INSERT INTO `usersinfo` VALUES (2, 'Avatar', '../../../static/vippage/vipicon/heart.png');

-- ----------------------------
-- Table structure for words
-- ----------------------------
DROP TABLE IF EXISTS `words`;
CREATE TABLE `words`  (
  `ID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID顺序',
  `word` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '语料',
  `type` enum('character','image') CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'character' COMMENT '语料类型',
  `habittype` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '爱好类型',
  `times` int(255) UNSIGNED NOT NULL COMMENT '发送的次数',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of words
-- ----------------------------
INSERT INTO `words` VALUES (1, '肌肉满身，吸引小妹！！！冲啊！！', 'character', '健身', 0);
INSERT INTO `words` VALUES (2, '要穿心仪的的衣服，要有强健的体魄，那么伙计，就来健身吧！', 'character', '健身', 0);
INSERT INTO `words` VALUES (3, '坚持天天健身，你就会成为全村最亮的仔ヾ(o´∀｀o)ﾉ ', 'character', '健身', 0);
INSERT INTO `words` VALUES (4, '坚持健身，线条感人(≖ᴗ≖)✧', 'character', '健身', 0);
INSERT INTO `words` VALUES (5, '小宝贝，快来健身呀，我在等你呦~！', 'character', '健身', 0);
INSERT INTO `words` VALUES (6, 'http://ww4.sinaimg.cn/bmiddle/6af89bc8gw1f8rrjf9rggj2064064dfz.jpg', 'image', '健身', 0);
INSERT INTO `words` VALUES (7, 'http://ww1.sinaimg.cn/bmiddle/9150e4e5ly1ftr4kcourej206o06oglw.jpg', 'image', '健身', 0);
INSERT INTO `words` VALUES (8, 'http://ww1.sinaimg.cn/bmiddle/9150e4e5ly1fq1sypqdjnj206o06o0t3.jpg', 'image', '健身', 0);
INSERT INTO `words` VALUES (9, 'http://ww1.sinaimg.cn/bmiddle/9150e4e5ly1frj8igsvmpj206o06ojrp.jpg', 'image', '健身', 0);
INSERT INTO `words` VALUES (10, '小宝贝，你的家人一定在等着你聊天哦！', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (11, '亲爱的~你忙完了吗，该给你的家人报一声安好了~', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (12, '你知道吗，总是不跟家人诉说自己的生活就是变颓废的表现哦', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (13, '外面的生活再苦再累，家人都能给你温暖的港湾。', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (14, '有什么心里话都跟家里人说说吧，虽然他们可能不太懂你，但是他们是真的爱你！', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (15, '小可爱啦啦啦，你终于有时间给家人打电话(๑╹◡╹)ﾉ\"\"\"', 'character', '与家人通话', 0);
INSERT INTO `words` VALUES (16, 'http://ww3.sinaimg.cn/bmiddle/9150e4e5ly1fqbfgrsieyj203h03edfo.jpg', 'image', '与家人通话', 0);
INSERT INTO `words` VALUES (17, 'http://ww1.sinaimg.cn/bmiddle/6af89bc8gw1f8p57573ibj204g04gq2w.jpg', 'image', '与家人通话', 0);
INSERT INTO `words` VALUES (18, 'http://ww1.sinaimg.cn/bmiddle/9150e4e5gy1g0x0f2i7i1j206o06o3za.jpg', 'image', '与家人通话', 0);
INSERT INTO `words` VALUES (19, 'http://ww4.sinaimg.cn/bmiddle/9150e4e5ly1fhoigknus6j209q09qjrd.jpg', 'image', '与家人通话', 0);
INSERT INTO `words` VALUES (20, 'http://ww3.sinaimg.cn/bmiddle/9150e4e5gy1g7iaijhmjfj204804vwec.jpg', 'image', '与家人通话', 0);

SET FOREIGN_KEY_CHECKS = 1;
