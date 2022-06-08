import styles from './kakaoMap.module.scss'
import { MouseEvent, useState, useEffect } from 'react'
import { Map, MapMarker, MapTypeId, Roadview } from 'react-kakao-maps-sdk'
import cx from 'classnames'
import Loading from 'components/Loading'

interface locationType {
  Lat: number
  Lon: number
}

const KakaoMap = () => {
  const [mapTypeId, setMapTypeId] = useState<kakao.maps.MapTypeId>()
  const [isRoadView, setIsRoadView] = useState(false)
  const [location, setLocation] = useState<locationType>({ Lat: 37.409736856513, Lon: 126.71141316479 })

  const setMapType = (e: MouseEvent<HTMLButtonElement>) => {
    const newMapTypeId = e.currentTarget.dataset.target as unknown as kakao.maps.MapTypeId
    setMapTypeId((prev) => (prev === newMapTypeId ? undefined : newMapTypeId))
  }

  const onClickMapRoadViewCoords = (_: kakao.maps.Map, event: kakao.maps.event.MouseEvent) => {
    setLocation({ Lat: event.latLng.getLat(), Lon: event.latLng.getLng() })
  }

  useEffect(() => {
    setTimeout(() => setIsRoadView(true), 1500)
  }, [location])

  return (
    <section className={styles.container}>
      <div className={styles.btnBox}>
        <button type='button' id='btnRoadmap' data-target={kakao.maps.MapTypeId.TRAFFIC} onClick={setMapType}>
          교통정보
        </button>
        <button type='button' id='btnSkyview' data-target={kakao.maps.MapTypeId.ROADVIEW} onClick={setMapType}>
          로드뷰
        </button>
      </div>
      <div className={styles.mapBox}>
        <Map
          className={cx(styles.mapWrapper, { [styles.mapResize]: isRoadView })}
          center={{ lat: location.Lat, lng: location.Lon }}
          onClick={onClickMapRoadViewCoords}
        >
          <MapMarker position={{ lat: location.Lat, lng: location.Lon }} />
          {mapTypeId && <MapTypeId type={mapTypeId} />}
        </Map>
        {isRoadView ? (
          <Roadview
            position={{
              lat: location.Lat,
              lng: location.Lon,
              radius: 50,
            }}
            className={styles.roadView}
          />
        ) : (
          <Loading type='spin' color='#b5ccda' />
        )}
      </div>
    </section>
  )
}

export default KakaoMap
