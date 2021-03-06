import React from "react";
import "../MenuJsx.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import YakinikuDeco from "../assets/YakinikuDeco.svg";

export const Yakiniku = ({ data }) => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row className="MenuTitleSpace">
          <Col>
            <div className="MenuDeco">
              <Image
                className="MenuDecoTitle"
                src={YakinikuDeco}
                alt="Logo"
                fluid
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="MobileTitle">
            <Image
              className="MobileDecoTitle"
              src={YakinikuDeco}
              alt="Logo"
              fluid
            />
          </Col>
        </Row>

        <Row className="MenuSpace">
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdCap">
                <p className="MenuHdTitele">部位</p>
                <p className="MenuHdText">
                  <span className="HdTextSp">通常</span>ハーフ
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">カルビ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥960</span>¥530 */}
                  <span className="MenuTextSp">¥980</span>¥540
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ハラミ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥840</span>¥530 */}
                  <span className="MenuTextSp">¥880</span>¥490
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">タン</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥960</span>¥530 */}
                  <span className="MenuTextSp">¥980</span>¥540
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ネギ塩タン</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥960</span>¥530 */}
                  <span className="MenuTextSp">¥980</span>¥540
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ロース</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥1060 </span>¥590 */}
                  <span className="MenuTextSp">¥1150 </span>¥640
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">味わいカルビ（中落ち）</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥680</span>¥380 */}
                  <span className="MenuTextSp">¥740</span>¥410
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ギアラ（赤セン）</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥530</span>¥270 */}
                  <span className="MenuTextSp">¥630</span>¥350
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ミノ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥820</span>¥450 */}
                  <span className="MenuTextSp">¥860</span>¥480
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">センマイ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥580</span>¥300 */}
                  <span className="MenuTextSp">¥630</span>¥350
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ホルモン</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥700</span>¥380 */}
                  <span className="MenuTextSp">¥780</span>¥430
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">ホルモン</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥630</span>¥330 */}
                  <span className="MenuTextSp">¥680</span>¥380
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">よめなかせ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">580</span>¥300 */}
                  <span className="MenuTextSp">¥630</span>¥350
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">混合</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥580</span> ¥300 */}
                  <span className="MenuTextSp">¥630</span> ¥350
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">レバー</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥630</span>¥330 */}
                  <span className="MenuTextSp">¥680</span>¥380
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">心臓</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥630</span>¥330 */}
                  <span className="MenuTextSp">¥680</span>¥380
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">牛ホホ肉（ツラミ）</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥580</span>¥330 */}
                  <span className="MenuTextSp">¥630</span>¥350
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">骨つきカルビ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥1010</span>¥560 */}
                  <span className="MenuTextSp">¥1150</span>¥640
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上カルビ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥1310</span>¥730 */}
                  <span className="MenuTextSp">¥1440</span>¥800
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上タン（10食限定）</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥1730</span>¥960 */}
                  <span className="MenuTextSp">¥1900</span>¥1060
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">上ロース</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥1730</span>¥960 */}
                  <span className="MenuTextSp">¥1900</span>¥1060
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚トロ</p>
                <p className="MenuText">
                  <span className="MenuTextSp">¥580</span>¥320
                  {/* <span className="MenuTextSp">¥550</span>¥300 */}
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚肉（つらみ）</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥550</span>¥300 */}
                  <span className="MenuTextSp">¥580</span>¥320
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚ロース</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥600</span>¥330 */}
                  <span className="MenuTextSp">¥650</span>¥360
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">豚バラ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥600</span>¥330 */}
                  <span className="MenuTextSp">¥650</span>¥360
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">歌声（タレ・辛ダレ）※豚の軟骨</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥500</span>¥270 */}
                  <span className="MenuTextSp">¥550</span>¥300
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">若ドリ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥600</span>¥330 */}
                  <span className="MenuTextSp">¥580</span>¥320
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">鶏のせせり</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSp">¥600</span>¥330 */}
                  <span className="MenuTextSp">¥580</span>¥320
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">あらびきウィンナー</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥530</span> */}
                  <span className="MenuTextSpSingle">¥550</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">厚切りベーコン</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥550</span> */}
                  <span className="MenuTextSpSingle">¥600</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">部位</p>
                  <p className="MenuHdText">
                    <span className="HdTextSp">通常</span>ハーフ
                  </p>
                </div>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">イカ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥680</span> */}
                  <span className="MenuTextSpSingle">¥650</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">エビ</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥790</span> */}
                  <span className="MenuTextSpSingle">¥780</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">貝柱</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥790</span> */}
                  <span className="MenuTextSpSingle">¥780</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTitele">海の幸セット</p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥890</span> */}
                  <span className="MenuTextSpSingle">¥980</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className="MenuTax"></p>
              </div>
            </Row>

            <Row className="MenuSec" xs={1} md={1}>
              <div className="MenuHdSec">
                <div className="MenuHdCap">
                  <p className="MenuHdTitele">内容</p>
                </div>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ファミリーセット（３～４人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ブタ、ウィンナー、野菜
                </p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥3400</span> */}
                  <span className="MenuTextSpSingle">¥3800</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ペアセット（２人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  カルビ、ハラミ、あじわいカルビ、ホルモン、トリ、ウィンナー、野菜
                </p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥2400</span> */}
                  <span className="MenuTextSpSingle">¥2700</span>
                </p>
              </div>
              <div className="MenuCap">
                <p className={"MenuTitle" + " " + "MenuTitleBg"}>
                  ホルモンセット（２人前）
                </p>
              </div>
              <div className="MenuCapSet">
                <p className="MenuTitele">
                  上ホルモン、よめなかせ、歌声、ホルモン、ギアラ
                </p>
                <p className="MenuText">
                  {/* <span className="MenuTextSpSingle">¥1580</span> */}
                  <span className="MenuTextSpSingle">¥1800</span>
                </p>
              </div>
              <div className="MenuCap">
                {/* <p className="MenuTax">※税抜き価格表示</p> */}
                <p className="MenuTax">※税込価格表示</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
