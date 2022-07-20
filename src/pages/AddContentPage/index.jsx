import React, { useState } from 'react';
import { BiMessageAdd } from 'react-icons/bi';
import Annotation from 'react-image-annotation'
import TextField from '@mui/material/TextField';
import VaniImg from 'src/assets/demo/vaniiveRepo5.jpg'
import Layout from 'src/components/Layout';
import './style.scss';
// https://twitter.com/OneVnC/status/1534867819451629568
// https://twitter.com/jun_mdesu/status/1534847373515849728

const AddContentPage = () => {


  const [imgAnno, setImgAnno] = useState({
    annotations: [],
    annotation: {}
  });

  const handleGeoChange = (i, field, newValue) => {
    const newAnno = imgAnno.annotations;
    newAnno[i].geometry[field] = newValue
    setImgAnno({
      annotation: imgAnno.annotation,
      annotations: newAnno
    })


  }

  const handleAnnoChange = (annotation) => {
    setImgAnno({ ...imgAnno, annotation })
  }

  const handleAnnoSubmit = (annotation) => {
    const { geometry, data } = annotation

    function r2(num) {
      return +(Math.round(num + "e+2") + "e-2");
    }

    const roundBoundaries = (geo) => {
      return { type: geo.type, x: r2(geo.x), y: r2(geo.y), width: r2(geo.width), height: r2(geo.height) }
    }
    console.log("annotations", imgAnno)
    setImgAnno({
      annotation: {},
      annotations: [...imgAnno.annotations, {
        geometry: roundBoundaries(geometry),
        data: {
          ...data,
          id: Math.random()
        }
      }]
    })
  }

  function renderEditor(props) {
    const { geometry } = props.annotation
    if (!geometry) return null
    const value = props.annotation.data && props.annotation.data.text;
    return (
      <div className="annotation-editor-container" style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
      }}>

        <div className="annotation-editor">
          <div className="input">

            <textarea
              placeholder='Write translation'
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              onChange={e => props.onChange({
                ...props.annotation,
                data: {
                  ...props.annotation.data,
                  text: e.target.value
                }
              })}
              value={value}
            >
            </textarea>
          </div>
          {value && (
            <div
              className="submit-btn"
              onClick={props.onSubmit}
            >
              <BiMessageAdd style={{ marginRight: '5px' }} />
              Add
            </div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div>
      <Layout title="Add New Content">
        <div className="content-page">
          <div className="add-content">
            <div className="media-container">
              <div>
                <Annotation
                  src={VaniImg}
                  alt='Vaniive Repo ⑤'
                  annotations={imgAnno.annotations}
                  type={imgAnno?.type}
                  value={imgAnno.annotation}
                  onChange={handleAnnoChange}
                  onSubmit={handleAnnoSubmit}
                  renderEditor={renderEditor}
                  allowTouch
                />
              </div>
            </div>

            <div className="annotations-container">
              {
                imgAnno.annotations.map((anno, i) =>
                  <div className='annotation' key={i}>
                    <div className='anno-text' >
                      {anno.data.text}
                    </div>
                    <div className='anno-pos' >
                      <div>
                        <TextField
                          label="x"
                          onChange={(e) => handleGeoChange(i, 'x', e.target.value)}
                          value={anno.geometry.x}
                          type="number"
                        />
                        <TextField
                          onChange={(e) => handleGeoChange(i, 'y', e.target.value)}
                          value={anno.geometry.y}
                          label="y"
                          type="number"
                        />
                      </div>
                      <div>
                        <TextField
                          label="w"
                          type="number"
                        />
                        <TextField
                          label="h"
                          type="number"
                        />
                        {/* w: {anno.geometry.width}
                        h:{anno.geometry.height} */}
                      </div>
                    </div>
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
