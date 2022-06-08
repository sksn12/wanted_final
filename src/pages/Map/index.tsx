import styles from './kakaoMap.module.scss'
import { MouseEvent, useState } from 'react'
import { Map, MapMarker, MapTypeId, Roadview } from 'react-kakao-maps-sdk'
import cx from 'classnames'

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
    setMapTypeId(newMapTypeId)
  }

  const onClickMapRoadViewCoords = (_: kakao.maps.Map, event: kakao.maps.event.MouseEvent) => {
    setIsRoadView(true)
    setLocation({ Lat: event.latLng.getLat(), Lon: event.latLng.getLng() })
  }

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
          <MapMarker position={{ lat: location.Lat, lng: location.Lon }}>
            <div className={styles.mapMarker}>현재 위치</div>
          </MapMarker>
          {mapTypeId && <MapTypeId type={mapTypeId} />}
        </Map>
        {isRoadView && (
          <Roadview
            position={{
              lat: location.Lat,
              lng: location.Lon,
              radius: 50,
            }}
            className={styles.roadView}
          />
        )}
      </div>
    </section>
  )
}

export default KakaoMap
