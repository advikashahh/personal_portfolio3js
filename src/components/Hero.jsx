import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import headerImg from "../assets/headerimg.png";

const Hero = () => {
  const toRotate = ["Frontend Developer", "Backend Developer", "UI Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(500 - Math.random() * 100); // Increase initial delta value
  const period = 1500; // Increase period value

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 2);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Advika</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am <span className="text-[#915EFF]">{text}</span>
          </p>
          <a href="https://drive.google.com/file/d/18ruljeQlIspALwo-C0JOdB00XvT7u9be/view?usp=sharing">
            <button className="px-8 py-2 mt-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#915EFF] rounded-lg hover:bg-[#9a6cff] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className='scale-100 md:scale-100 float-right hidden lg:block'>
        <img src={headerImg} alt="banner" id='imgg' className='scale-75' />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


























































































































































































/*import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/headerimg.png'
import { styles } from '../styles'


const Hero = () => {

  const toRotate = ["Frontend Developer", "Backend Developer" , "UI Designer"]
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text,setText] = useState('')
  const [index, setIndex] = useState(1);
  const [delta,setDelta] = useState(10 - Math.random()*1)
  const period = 450


  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    },delta)

    return () => {clearInterval(ticker)}
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div>
      <section className='relative w-full mx-auto h-screen'>
        <div className={` absolute inset-0 top-[120px] max-w-7xl mx-auto` }>
          <div className='flex flex-col md:flex-row md:mt-10 w-full justify-between'>
            <div className=' max-w-3xl flex flex-col items-center md:block '>
              <span className=' tagline max-w-max'>Welcome to my Portfolio !</span>
              <h1 className='text-4xl md:text-7xl mt-10 md:mt-24 py-4'>{`I'm Advika `}
                <br />
              </h1>
              <div className='wrap font-bold mb-10 text-4xl md:text-7xl'> <span className='br22 '>{text} </span> </div>
            </div>

            <div className=' scale-75 md:scale-100'>
              <img src={headerImg} alt="banner" id='imgg' className=' scale-75' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero*/