import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from "../../styles/Ios.module.css"
import { MdTimer, MdCheck } from "react-icons/md"
import { GrAppleAppStore } from "react-icons/gr"
import { FaRobot } from "react-icons/fa"
import { AiFillRobot, AiOutlineQuestion } from "react-icons/ai"
import Head from 'next/head'

const IosApp = () => {
  const [selected, setSelected] = useState("first")
  const changer = () => {
    if (selected === "first") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Software bots are designed to finish repetitive specific task or tasks. With the software bots, you do not need any extra human labor to make this task done.
          </p>
        </Container>

      )
    }
    if (selected === "second") {
      return (

        <Container>
          <p className={styles.appdevservpara}>
            Software bots are a time saver for your employees and reduce the operational cost of your company.
          </p>
        </Container>

      )
    }
    if (selected === "third") {
      return (
        <Container>
          <p className={styles.appdevservpara}>
            Software bots are basic or complex programs for finishing your repetitive tasks without any errors.
          </p>
        </Container>
      )
    }

  }

  return (
    <>
      <Head>
        <title>RPA Software Bots | Mindasoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Software bots are designed as complex or simple computer programs, robotic process automation RPA handles repetitive tasks easily without any errors."></meta>

        <meta property="og:url" content="https://www.mindasoft.com/rpa/software-bots" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RPA Software Bots | Mindasoft" />
        <meta property="og:description" content="Software bots are designed as complex or simple computer programs, robotic process automation RPA handles repetitive tasks easily without any errors." />
        <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RPA Software Bots | Mindasoft" />
        <meta name="twitter:description" content="Software bots are designed as complex or simple computer programs, robotic process automation RPA handles repetitive tasks easily without any errors." />
        <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
        <link rel="canonical" href="https://www.mindasoft.com/rpa/software-bots" />
      </Head>

      <Container fluid className={styles.ioscontainer}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h1 className={styles.headone}>RPA / Software Bots </h1>
              <h2 className={styles.headtwo}>We are building software bots to make automation of your repetitive tasks.</h2>
              <Link href="/contact"><Button className={styles.headingbutton} size='lg'>Get Proposal</Button></Link>
            </Col>
            <Col className='d-flex justify-content-center' xs={12} sm={12} md={12} lg={6}>
              <img src='/images/software-bots.png' width={400} height={300} className={styles.iosimage} alt="software bots" />
            </Col>
          </Row>

          <Container className={styles.headservicecontainer}>
            <span className={styles.serviceshead}>Services</span>
            <div className='d-flex'>
              <Row>
                <Col>
                  <span className={styles.serviceparatext}>Software Bots <br />Development</span>
                </Col>
              </Row>
            </div>
          </Container>

        </Container>

      </Container>


      {/* Industry Leader */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>What are <strong>software bots</strong>?</h2>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Software bots in the tech world people usually call these robots are just software designed to do only specific tasks. The functionality
          of this bot is limited to doing only a certain task. You can think of these bots as a robot that sends messages to your customers when you are offline or you can make robots do much more heavy tasks like
          finding all certain product prices all over the internet.</p>
        <p className={styles.industryparalong}>We are already familiar with some kind of bots in our lives one of them is chatbots. When we want to reach customer support of a
          website probably RPA automation software will reply to you to understand what is your issue. This robot will redirect you to the right department after analyzing your problem.</p>
        <p className={styles.industryparalong}>Building software bots for applications are a task for software development teams.
          Today, the software technology of RPA, Robotic Process Automation is very easy to create bots that perform automated tasks.</p>
        <p className={styles.industryparalong}>We can build your software bots to perform simple or complex repetitive tasks. These robots will run without any error and automation robots will
          handle all the heavy tasks for you. You can easily save money by automating your heavy task with RPA and growing your business.</p>


      </Container>


      {/* Description  */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>What can <strong>software bots</strong> do?</h2>
        <h3 className={styles.descheader}>Increase productivity</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Software bots allow individuals and companies to be more effective and increase their productivity. With software bots, you
          will be able to automate any task easily. Easy or hard tasks will not be a problem for RPA software bots. Robots will take the all heavy lifting and will increase the
          productivity of your employees and the company.</p>

      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Reduce costs</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Increasing productivity will have a direct impact on the costs. Repetitive tasks are hard, boring, and time-consuming for your employees.
          Making the repetitive tasks done by software robots will reduce the cost of labor. Make your employees more effective and productive with RPA software bots and specific tasks robots.</p>
      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Ease of use</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Basic training for your employees about the software bots will be enough for them to control the bot for tasks. Automation bots
          are very easy to understand and no coding background is required to customize or edit the software bot for your next task. Relax and make your all tasks done by RPA automation software bots.</p>
      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>Increase employee satisfaction</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Repetitive is not a likable task for all employees.
          Because it is a boring and time-consuming process that makes your all employees stressed.
          Giving all the heavy and complex tasks to robots will reduce the stress level of your employees and it will increase the overall satisfaction of your employees, supervisors, and even clients.
        </p>
      </Container>

      <Container className='mt-5'>
        <h3 className={styles.descheader}>More flexibility</h3>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>Do you have an extra task that needs to be done by software bots or do you need to customize the current robots for a different task? You can
          easily customize or edit the automation robots with zero coding knowledge. Automation robots can do multi-tasks. This feature of the robots is helping companies of any size to make
          them grow faster.</p>
      </Container>

      {/* iphone increase profit */}
      <Container className='mt-5'>
        <h2 className={styles.industryheader}>Which industry is using <strong>Software Bots</strong>? </h2>
        <div style={{ paddingTop: "1px", backgroundColor: "#e6e6e6" }}></div>

        <p className={styles.industryparalong}>A lot of industries are using software bots and robots to automate their tasks and increase customer satisfaction. Most of internet companies and
          the mechanic industry are automating their tasks to reduce cost and increase productivity. In that way, companies and startups increase their sales.
        </p>
      </Container>

      <Container className={styles.testimonialscontainer}>

        <Row >

          <Col className='mt-5' xs={12} lg={6}>

            <h3 className={styles.mvptwosidesubheading}>HR</h3>
            <p className={styles.mvptwosidelongpara}>
              Software bots are used for many purposes in human resources. You can send bulk emails to all employees, finding the employees working hard than the other ones or you can
              customize your bot for a specific task. You can use your software bot for any purpose in the HR department.
            </p>

            <h3 className={styles.mvptwosidesubheading}>IT</h3>
            <p className={styles.mvptwosidelongpara}>
              The IT industry mostly uses software bots. Instead of creating some files or content by hand, it is very easy to do it with robots.
              In some cases, the IT industry uses software bots for, customer service, fetching data, mining data, and much more.
            </p>
            <h3 className={styles.mvptwosidesubheading}>Customer Service</h3>
            <p className={styles.mvptwosidelongpara}>
              Customer service is one of the most important things in the business. Software bots help customer service agents to automate their email replies or help to send mail
              to many customers with one click. Software bots are a must-have feature for increasing the effectiveness of the customer service department.
            </p>

          </Col>

          <Col className='mt-5' xs={12} lg={6}>

            <h3 className={styles.mvptwosidesubheading}>Data Mining</h3>
            <p className={styles.mvptwosidelongpara}>
              When we talk about data mining you can think of this as a programmable search engine. Data mining is the process of extracting and analyzing a specific thing.
              This can be a product price, text, or maybe an image somewhere on the internet. Software bots are very efficient when you want to extract some data for your company.
              Mostly this automation process is done in python language. Python language has super powerful libraries for automation and data mining.
            </p>

            <h3 className={styles.mvptwosidesubheading}>Finance</h3>
            <p className={styles.mvptwosidelongpara}>
              The finance industry is using software bots to maximize its profits. It is possible to create a trading bot that sells and buys stocks when a certain price is met. Also the trading websites
              a limit stop is a good example of that.
            </p>

            <h3 className={styles.mvptwosidesubheading}>Chatbots</h3>
            <p className={styles.mvptwosidelongpara}>
              Today many companies use their chatbots. This chatbot can be built for any complexity. Some companies prefer to use simple chatbots to only reply to customers
              with some specific auto-replies, some big companies add features like machine learning to these chatbots to reduce human labor. It is crucial to have a chatbot for a company
              to satisfy its customers.
            </p>
          </Col>

        </Row>
      </Container >



      {/* Center blue item */}
      <Container fluid className={styles.middleblue}>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><span className={styles.centerblueheading}>RPA / Software Bots Development</span></Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={12} lg={6}><Link href="/contact"><Button size='lg' className={styles.bluesidebutton}>Get Proposal</Button></Link></Col>
          </Row>
        </Container>
      </Container>

      {/* Questions */}
      <Container>
        <h2 className={styles.appdevservices}>Questions</h2>
        <hr style={{ marginBottom: "20px" }} />
        <Container>
          <Row >

            <Col className='d-flex justify-content-center text-start mt-5' xs={12} sm={12} md={12} lg={6}>

              <Container className={styles.appdevsevcontainer}>
                <h3 className={selected == "first" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("first")} ><FaRobot size={35} style={{ marginRight: "8px" }} color="green" />How do software bots work?</h3>
                <h3 className={selected == "second" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("second")}><AiOutlineQuestion size={35} style={{ marginRight: "8px" }} color="green" />What are the benefits of using bots?</h3>
                <h3 className={selected == "third" ? styles.appdevservtitlesblue : styles.appdevservtitles} onClick={() => setSelected("third")}><AiFillRobot size={35} style={{ marginRight: "8px" }} color="green" />What is a software bot?</h3>
              </Container>

            </Col>

            <Col className='d-flex justify-content-center mt-5' xs={12} sm={12} md={12} lg={6}>
              <Container className={styles.questionsmobile}>
                {changer()}
              </Container>
            </Col>

          </Row>

        </Container>
      </Container>

      <Container>
        <Row className={styles.casestudiescontainer}>

          <Col className='d-flex justify-content-center align-items-center'>
            <img src='/images/robotic-process-automation.png' width={380} height={360} className={styles.casestudiesimage} alt="robotic-process-automation" />
          </Col>

          <Col>

            <Container className='d-flex flex-column mt-5'>

              <h2 className={styles.bottomsideheading}>Software bots development</h2>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />Save time with Robotic process automation.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />Reduce human labor in repetitive critical tasks.</p>
              <p className={styles.bottomsidepara}><MdCheck size={35} style={{ marginRight: "10px" }} color="green" />Reduce your costs with software bots.</p>

            </Container>

          </Col>

        </Row>
      </Container>

    </>
  )
}

export default IosApp