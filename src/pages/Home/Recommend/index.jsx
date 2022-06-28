import React, { useEffect, useState } from 'react'
import SetMovie from '../SetMovie'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import WeUI from 'react-weui'
import { getVideos } from '@/api/request'

const {
  Toast
} = WeUI;

export default function Recommend(props) {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async() => {
      let { data } = await getVideos()
      setVideos([...data])
      setLoading(false)
    })()
  }, [])

  return (
    <>
      <SetMovie />
      <Wrapper>
        <Toast show={loading} icon="loading">加载中...</Toast>
        {
          videos && videos.map(
            video => (
              <div className='videos-flex'>
                <Link
                  to={`/recommend/video${video.id}`}
                  key={video.id}
                >
                  <div className='videos-box'>
                    <div className="videos-img">
                      <img src={video.img} alt="" />
                      <div className="info">
                        <i className='iconfont icon-bofangqi-bofangxiaodianshi'></i>
                        <span>{video.bofang}</span>
                        <i className='iconfont icon-jianyi'></i>
                        <span>{video.pinglun}</span>
                        <span>{video.time}</span>
                      </div>
                    </div>
                    <div className='title'>
                      <span>{video.title}</span>
                    </div>
                    <div className='up'>
                      <span>{video.up}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )
        }
      </Wrapper>
    </>
  )
}
