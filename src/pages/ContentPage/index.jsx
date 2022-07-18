import React, { useState, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Annotation from 'react-image-annotation'
import Layout from 'src/components/Layout';
import { mockAnnotations } from './mockData'
import VaniImg from 'src/assets/demo/vaniiveRepo5.jpg'
import './style.scss';
import { useMediaQuery } from '@mui/material';
// https://twitter.com/OneVnC/status/1534867819451629568
// https://twitter.com/jun_mdesu/status/1534847373515849728

const ContentPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const contentData = [
    {
      lang: 'Original',
      anno: {
        canvas: {},
        texts: []
      }
    },
    {
      lang: 'English',
      anno: mockAnnotations
    }
  ]
  const [tabVal, setTabVal] = useState(0);
  const [imgAnno, setImgAno] = useState({ annotation: {}, annotations: [] });
  const [imgSize, setImgSize] = useState({ h: null, w: null });

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    setImgSize({ h: offsetHeight, w: offsetWidth });
  };

  const createAnno = (data) => {
    return {
      annotation: {},
      annotations: data.texts.map(d => {
        return {
          geometry: {
            type: 'RECTANGLE',
            x: d.x + (isMobile ? (d.x / 35) : 0),
            y: d.y,
            width: d.w,
            height: d.h,
          },
          data: {
            text: d.text,
            id: Math.random(),
          },
        }
      }

      )
    }
  };


  const handleTabChange = (event, newValue) => {
    setTabVal(newValue);
    setImgAno(createAnno(contentData[newValue].anno))
  };

  return (
    <div>
      <Layout title="Content Demo">
        <div className="content-page">
          <div className="content-card">
            <div className="media-container">
              <Annotation
                onLoad={onImgLoad}
                src={VaniImg}
                alt='Vaniive Repo ⑤'
                annotations={imgAnno.annotations}
                type={imgAnno?.type}
                value={imgAnno.annotation}
                disableAnnotation
                disableOverlay
              />
            </div>


            <div className="lang-tabs">
              <Tabs value={tabVal} onChange={handleTabChange} aria-label="Languages Tabs">
                <Tab label="Original" />
                <Tab label="English" />
              </Tabs>
            </div>
            <div className='tab-panel-container'>
              <div hidden={tabVal !== 0}>
                <div className="content-info">
                  <span className="title">Description:</span>
                  <span className="description">

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
                <div className="content-info">
                  <span className="title">Translation:</span>
                  <span className="description">Jun-san wrote a tonge twister and asked Hanae-san (VA of Vanitas) to pretend reading the tongue twister and Hanae-san ended up saying it 5 times in row which made Jun-san laugh a lot. (˶◠....◠˶) Hanae-san has really cool and charming personality!</span>

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