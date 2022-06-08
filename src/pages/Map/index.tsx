import styles from './kakaoMap.module.scss'
import { MouseEvent, useState } from 'react'
import { Map, MapMarker, MapTypeId, Roadview } from 'react-kakao-maps-sdk'

const KakaoMap = () => {
  const [mapTypeId, setMapTypeId] = useState<kakao.maps.MapTypeId>()
  const [roadViewLat, setRoadViewLat] = useState<number | undefined>()
  const [roadViewLon, setRoadViewLon] = useState<number | undefined>()

  const setMapType = (e: MouseEvent<HTMLButtonElement>) => {
    const newMapTypeId = e.currentTarget.dataset.target as unknown as kakao.maps.MapTypeId
    setMapTypeId(newMapTypeId)
  }

  const onClickMapRoadViewCoords = (_: kakao.maps.Map, event: kakao.maps.event.MouseEvent) => {
    setRoadViewLat(event.latLng?.getLat() ?? 0)
    setRoadViewLon(event.latLng?.getLng() ?? 0)
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
          className={styles.mapWrapper}
          center={{ lat: 37.409736856513, lng: 126.71141316479 }}
          onClick={onClickMapRoadViewCoords}
        >
          <MapMarker position={{ lat: 37.409736856513, lng: 126.71141316479 }}>
            <div className={styles.mapMarker}>자세한 번지 수 x</div>
          </MapMarker>
          {mapTypeId && <MapTypeId type={mapTypeId} />}
        </Map>
        {roadViewLat && roadViewLon && (
          <Roadview
            position={{
              lat: roadViewLat,
              lng: roadViewLon,
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
