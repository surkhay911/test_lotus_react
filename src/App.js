import logo from './logo.svg';
import './App.css';
import CountDown from './Timercomponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Ход торгов</p>
        
      </header>
      <body>
      {/* <div className="timer">
          <div>

          </div>
          <div className='one'>
            <CountDown minutes={2} seconds={0}/>
          </div>
          <div className='two'>
          </div>
          <div className='three'>
          </div>
          <div className='four'>
          </div>
        </div> */}
        {/* <div className='roles'>
          <div>

          </div>
          <div>
            <p>Участник 1</p>
          </div>
          <div>
            <p>Участник 2</p>
          </div>
          <div>
            <p>Участник 3</p>
          </div>
          <div>
            <p>Участник 4</p>
          </div>
        </div> */}
        <div class="table-responsive-sm">
          <table class="table table-striped">
            <tbody>
            <tr class="times">
                <td scope="row">Ход</td>
                <td className='one'><CountDown minutes={2} seconds={0}/></td>
                <td className='two'></td>
                <td className='three'></td>
                <td className='four'></td>
              </tr>
            <tr class="">
                <td scope="row">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
                <td>Участник №1</td>
                <td>Участник №2</td>
                <td>Участник №3</td>
                <td>Участник №4</td>
              </tr>
              <tr class="">
                <td scope="row">Наличие комплекса мероприятий, повыщающих стандарты качества изготовления</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr class="">
                <td scope="row">Сроки изготовления лота, дней</td>
                <td>80</td>
                <td>90</td>
                <td>75</td>
                <td>120</td>
              </tr>
              <tr class="">
                <td scope="row">Гарантийные обязательства, мес</td>
                <td>24</td>
                <td>24</td>
                <td>22</td>
                <td>36</td>
              </tr>
              <tr class="">
                <td scope="row">Условия оплаты</td>
                <td>30%</td>
                <td>100%</td>
                <td>60%</td>
                <td>90%</td>
              </tr>
              <tr class="">
                <td scope="row">Стоимость изготовления лота, руб.(без НДС)</td>
                <td>
                  <p>3,700,000 руб.</p>
                  <p>-25,000 руб.</p>
                  <p>2,475,000 руб.</p>
                </td>
                <td>
                  <p>3,200,000 руб.</p>
                  <p>-25,000 руб.</p>
                  <p>2,475,000 руб.</p>
                </td>
                <td>
                  <p>2,800,000 руб.</p>
                  <p>-25,000 руб.</p>
                  <p>2,475,000 руб.</p>
                </td>
                <td>
                  <p>2,500,000 руб.</p>
                  <p>-25,000 руб.</p>
                  <p>2,475,000 руб.</p>
                </td> 
              </tr>
              <tr class="">
                <td scope="row">Действия:</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </body>
    </div>
  );
}

export default App;
