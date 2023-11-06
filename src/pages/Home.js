import '../modules-css/home.css';
import calculadoranew from '../icons/calculadoranew.png'

const Home = () => (
  <div className="main-cont">
    <div className="home-cont">
      <h3 className="welcome">Welcome to our Page!</h3>
      <p style={{width: '50%',marginLeft: '40%', border: '1px solid ', padding: '25px', borderRadius: '16px', boxShadow: '5px 5px 5px 5px', backgroundColor: '#faf0ca'}}>
        "Math Magicians" typically refers to individuals who possess exceptional 
        mathematical skills and are capable of 
        performing complex mathematical calculations and problem-solving with ease and precision.
        These 
        individuals are often admired for their ability to manipulate numbers and equations as if 
        they have a magical touch when it comes to mathematics.
      </p>
      <img src={calculadoranew} style={{marginLeft: '55px', marginTop: '-35px'}} alt='calculator' width={'250px'}></img>
      <p  style={{width: '50%',marginLeft: '40%', border: '1px solid ', padding: '25px', borderRadius: '16px', boxShadow: '5px 5px 5px 5px', backgroundColor: '#faf0ca', marginTop: '-180px'}}>
        It's important to note that while some individuals may have an innate talent for mathematics, mathematical
        proficiency can also be developed and honed through education, practice, and dedication.
        Not all Math Magicians are born with their abilities; some have acquired their skills 
        through hard work and dedication to the subject.
      </p>
    </div>
  </div>
);

export default Home;
