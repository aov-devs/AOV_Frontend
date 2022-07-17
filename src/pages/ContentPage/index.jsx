import React, { useState, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Annotation from 'react-image-annotation'
import Layout from 'src/components/Layout';
import { mockAnnotations } from './mockData'
import './style.scss';
// https://twitter.com/OneVnC/status/1534867819451629568
// https://twitter.com/jun_mdesu/status/1534847373515849728

const ContentPage = () => {
  const [tabVal, setTabVal] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabVal(newValue);
  };

  return (
    <div>
      <Layout title="Content">
        <div className="content-page">
          <div className="content-card">
            <div className="media-container">
              <Annotation
                src={"https://pbs.twimg.com/media/FUzcgKmagAYworH?format=jpg&name=medium"}
                alt='Two pebbles anthropomorphized holding hands'
                annotations={mockAnnotations.annotations}
                type={mockAnnotations?.type}
                value={mockAnnotations.annotation}
                disableAnnotation
                disableOverlay
              />

              {/* <img src="https://pbs.twimg.com/media/FUzcgKmagAYworH?format=jpg&name=medium" /> */}
            </div>

            <div className="lang-tabs">
              <Tabs value={tabVal} onChange={handleTabChange} aria-label="Languages Tabs">
                <Tab label="Original" />
                <Tab label="English" />
              </Tabs>
            </div>
            <div className='tab-panel-container'>
              <div hidden={tabVal !== 0}>
                <div>
                  <span>Description:</span>
                  <span>

                    #ヴァニイベ レポ⑤
                    <br />
                    シナリオには「ここで花江さんに早口言葉を言っている振りをしていただくことは可能でしょうか?」としか書かなかったのですが、出来上がった台本では⬇️の早口言葉を実際に最大5回連続言う流れになっていて思わず笑ってしまいました
                    チャレンジの結果はぜひその目でお確かめ下さい</span>

                </div>
                <div>
                  <span>Source: <a href="https://twitter.com/jun_mdesu/status/1534847373515849728"> @jun_mdesu </a></span>
                </div>
              </div>

              <div hidden={tabVal !== 1}>
                <div>
                  <span>Translation:</span>
                  <span>Jun-san wrote a tonge twister and asked Hanae-san (VA of Vanitas) to pretend reading the tongue twister and Hanae-san ended up saying it 5 times in row which made Jun-san laugh a lot. (˶◠....◠˶) Hanae-san has really cool and charming personality!</span>

                </div>

                <span>Transalted By:</span>
                <span>TL Notes:</span>
              </div>


            </div>
          </div>
        </div>
      </Layout>
    </div>)
};

export default ContentPage;
