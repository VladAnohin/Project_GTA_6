import s from './Home.module.css'

const Home = () => {
  return (
    <div className={s.wrapper}>
      <form>
      <h1>GTA 6 - оставь заявку</h1>
      <input type="name" placeholder='Введите своё имя'/>
      <input type="email" placeholder='Введите Email:'/>
      <button>Хочу ГТА!</button>
      </form>
    </div>
  )
}

export default Home
