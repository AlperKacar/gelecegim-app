import { Helmet} from "react-helmet"

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>
          Geleceğim Sayfa Hatası
        </title>
      </Helmet>
      hata sayfası
    </div>
  )
}

export default PageNotFound