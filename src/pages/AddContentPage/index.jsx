import React, { useState } from 'react';
import VaniImg from 'src/assets/demo/vaniiveRepo5.jpg'
import Annotation from 'react-image-annotation'
import Layout from 'src/components/Layout';
import './style.scss';
// https://twitter.com/OneVnC/status/1534867819451629568
// https://twitter.com/jun_mdesu/status/1534847373515849728

const AddContentPage = () => {


  const [imgAnno, setImgAnno] = useState({
    annotations: [],
    annotation: {}
  });



  const handleAnnoChange = (annotation) => {
    setImgAnno({ ...imgAnno, annotation })
  }

  const handleAnnoSubmit = (annotation) => {
    const { geometry, data } = annotation
    console.log("annotations", imgAnno)
    setImgAnno({
      annotation: {},
      annotations: imgAnno.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }


  return (
    <div>
      <Layout title="Add New Content">
        <div className="content-page">
          <div className="add-content">
            <div className="media-container">
              <Annotation
                src={VaniImg}
                alt='Vaniive Repo ⑤'
                annotations={imgAnno.annotations}
                type={imgAnno?.type}
                value={imgAnno.annotation}
                onChange={handleAnnoChange}
                onSubmit={handleAnnoSubmit}
                allowTouch
              />
            </div>

            <div className="annotations-container">
              {
                imgAnno.annotations.map((anno, i) =>
                  <div key={i}>
                    {anno.data.text}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Layout>
    </div>)
};

export default AddContentPage;
