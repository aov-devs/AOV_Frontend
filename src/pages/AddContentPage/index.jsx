import React, { useState, useEffect } from 'react';
import { BiMessageAdd, BiMessageX, BiEdit, BiCommentCheck } from 'react-icons/bi';
import Annotation from 'react-image-annotation'
import NumericInput from 'react-numeric-input2';
import TextField from '@mui/material/TextField';
import { Tooltip, Pagination, Select, MenuItem, useMediaQuery } from '@mui/material';
import VaniImg from 'src/assets/demo/loveismission1.jpg'
import Layout from 'src/components/Layout';
import { mockAnnotations } from './mockData'

import './style.scss';
// https://twitter.com/OneVnC/status/1534867819451629568
// https://twitter.com/jun_mdesu/status/1534847373515849728




const AddContentPage = ({ clear = false }) => {

  const isMobile = useMediaQuery('(max-width:600px)')
  const createAnno = (data) => {
    return {
      annotation: {},
      annotations: data.map(d => {
        return {
          geometry: {
            type: 'RECTANGLE',
            x: d.x,
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



  const [imgAnno, setImgAnno] = useState(clear ?
    {
      annotation: {},
      annotations: [],
    } : createAnno(mockAnnotations));


  const deleteAnno = (index) => {
    const newAnno = imgAnno.annotations;
    newAnno.splice(index, 1);
    setImgAnno({
      annotation: imgAnno.annotation,
      annotations: newAnno
    })
  }

  const handleGeoChange = (i, field, newValue) => {
    const newAnno = imgAnno.annotations;
    newAnno[i].geometry[field] = newValue
    setImgAnno({
      annotation: imgAnno.annotation,
      annotations: newAnno
    })
  }

  const handleMouseEnter = (i, isEnter) => {
    const newAnno = imgAnno.annotations;
    newAnno[i].isActive = isEnter;
    setImgAnno({
      annotation: imgAnno.annotation,
      annotations: newAnno
    })
  }

  const GeoNum = ({ annotation, idx, field }) => {
    return (
      <div className="geo-num">
        <label>{field}</label>
        <NumericInput
          name={field}
          value={annotation.geometry[field]}
          onChange={(v) => handleGeoChange(idx, field, v)}
          min={0}
          max={100}
          step={0.5}
          precision={2}
          size={5}
          title={field}
          mobile={false}
          strict
        />
      </div>

    )
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


  const saveAnno = () => {
    const anno = imgAnno.annotations.map(anno => {
      const { x, y, width, height } = anno.geometry;
      return ({
        x, y,
        w: width,
        h: height,
        text: anno.data.text,
      })
    })
    console.log(anno)
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
  const handleAnnoTextChange = (i, newValue) => {
    const newAnno = imgAnno.annotations;
    newAnno[i].data.text = newValue
    setImgAnno({
      annotation: imgAnno.annotation,
      annotations: newAnno
    })
  }

  const AnnotationEditBox = ({ annotation, index, handleMouseEnter }) => {

    const [editMode, setEditMode] = useState(false);
    const [translation, setTranslation] = useState(annotation.data.text);

    return (
      <div className='annotation'
        onMouseEnter={e => handleMouseEnter(index, true)}
        onMouseLeave={e => handleMouseEnter(index, false)}
      >
        <div className='anno-text' >
          <span className="index">
            #{index + 1}
          </span>
          <span className="input">
            <TextField
              multiline
              fullWidth
              value={translation}
              disabled={!editMode}
              onChange={(e) => setTranslation(e.target.value)}
            />
          </span>

          {!editMode &&
            <Tooltip title="Edit">
              <span className="editIcon" onClick={() => setEditMode(true)} >
                <BiEdit />
              </span>
            </Tooltip>
          }

          {editMode &&
            <Tooltip title="Save Changes">
              <span className="editIcon" onClick={() => {
                handleAnnoTextChange(index, translation);
                setEditMode(false);

              }} >
                <BiCommentCheck />
              </span>
            </Tooltip>
          }

          <Tooltip title="Delete">
            <span className="deleteIcon" onClick={() => deleteAnno(index)}>
              <BiMessageX />
            </span>
          </Tooltip>
        </div>
        <div className='anno-pos' >
          <div className='groupfield'>
            <GeoNum annotation={annotation} idx={index} field='x' />
            <GeoNum annotation={annotation} idx={index} field='y' />
          </div>
          <div className='groupfield'>
            <GeoNum annotation={annotation} idx={index} field='width' />
            <GeoNum annotation={annotation} idx={index} field='height' />
          </div>
        </div>
      </div >)
  };
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [pageN, setPageN] = React.useState(Math.ceil(imgAnno.annotations.length / rowsPerPage));
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    saveAnno();
    setPageN(Math.ceil(imgAnno.annotations.length / rowsPerPage));
  }, [imgAnno.annotations, rowsPerPage])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const pageRows = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };
  return (
    <div>
      <Layout title="Add New Content">
        <div className="content-page">
          <div className="add-content">
            <div className="media-container">
              <div style={{zIndex:1}}>
                <Annotation
                  src={VaniImg}
                  alt='Vaniive Repo ⑤'
                  annotations={imgAnno.annotations}
                  type={imgAnno?.type}
                  value={imgAnno.annotation}
                  onChange={handleAnnoChange}
                  onSubmit={handleAnnoSubmit}
                  renderEditor={renderEditor}
                  highlightColor='#7adcef'
                  allowTouch
                />
              </div>
            </div>

            <div className="annotations-container">
              <div className="pagination-container">
                <Pagination siblingCount={isMobile ? 0 : 2} count={pageN} page={page} onChange={handlePageChange} color="primary" />
              </div>
              <div>
                {
                  imgAnno.annotations.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((anno, i) =>

                    <AnnotationEditBox
                      key={(page - 1) * rowsPerPage + i}
                      annotation={anno}
                      index={(page - 1) * rowsPerPage + i}
                      handleMouseEnter={handleMouseEnter}
                    />)
                }
              </div>

              <div className="boxes-per-page">
                <label>
                  Boxes per page:
                </label>
                <Select
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage}
                >
                  {Object.entries(pageRows).map(([val, label], i) => (
                    <MenuItem value={val} key={i}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </div >)
};

export default AddContentPage;
