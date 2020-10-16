import React from 'react';
import { Row, Col, ListGroup, Tab, TabContent } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.NewsSec {
    font-family: 'Noto Serif JP', serif;
    color: #F3F0DB;
}

.Tab {
    margin: 6%;
}

.TabFrame {
    border: 5px solid #007BFF;
    border-radius: 15px;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
}

.TabContent {
    margin: 8%;
}

.title {
    color: #F3F0DB;
    padding-bottom: 5%;
}

.br {
    white-space: pre-wrap;
}
`;

export const NewsList = () => (
    <Styles>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <Tab.Container defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup className="Tab">
                                <ListGroup.Item action href="#link1">
                                    2020.10.23 New HP
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    2011.4.14 義援金について
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    .
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    .
                                    </ListGroup.Item>
                                <ListGroup.Item action href="#link5">
                                    .
                                    </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8} className="NewsSec">
                            <Tab.Content className="TabFrame">
                                <Tab.Pane className="TabContent" eventKey="#link1">
                                    <h3 className="title">ホームページリニューアルのお知らせ</h3>
                                    <p className="br">日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。</p>
                                    <p className="br">本日、ホームページの全面リニューアルをいたしました。</p>
                                    <p className="br">当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。</p>
                                    <p className="br">今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。</p>
                                    <TabContent />
                                </Tab.Pane>
                                <Tab.Pane className="TabContent" eventKey="#link2">
                                    <h3 className="title">義援金、店頭募金送金のご報告</h3>
                                    <p className="br">被災地の少しでも早い復興をお祈り申し上げます。</p>
                                        企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
                                        引き続き店頭募金や出来る限りの支援活動は行ってまいります。
                                        <p className="br">義援金</p>
                                    <p className="br">焼肉ダルマ　浜店・青江店　　15万円</p>
                                    <p className="br">店頭募金</p>
                                    <p className="br">浜店　　　　　 　14,454円</p>
                                    <p className="br">青江店　　　　　24,551円</p>
                                        (すべて2011年4月14日送金)
                                        皆様の善意に心から御礼申しあげます。
                                        <TabContent />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    </Styles>
)