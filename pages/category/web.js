import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BlogNavbar from '../../components/blogNavbar'
import styles from "../../styles/Blog.module.css"
import Blog from '../../models/blog';
import convertDocToObj from '../../utils/convert';
import dbConnect from '../../utils/db'
import iosStyles from "../../styles/Ios.module.css"
import { FaArrowRight } from 'react-icons/fa';

const BlogWeb = ({ webblogs }) => {
    return (
        <>
            <Head>
                <title>Web Blog | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Mindasoft web blog, you can read useful articles about the latest web development trends and web technologies on this page."></meta>

                <meta property="og:url" content="https://www.mindasoft.com/category/web" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Web Blog | Mindasoft" />
                <meta property="og:description" content="Mindasoft web blog, you can read useful articles about the latest web development trends and web technologies on this page." />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Blog | Mindasoft" />
                <meta name="twitter:description" content="Mindasoft web blog, you can read useful articles about the latest web development trends and web technologies on this page." />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/category/web" />
            </Head>
            <Container fluid className={iosStyles.ioscontainer}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <h1 className={iosStyles.headone}>Web Blog</h1>
                            <h2 className={iosStyles.headtwo} style={{ marginTop: "30px", fontSize: "25px", lineHeight: "34px" }}>Blog articles about latest web development tools, technologies and trends.</h2>
                            <Link href="/contact"><Button className={iosStyles.headingbutton} size='lg' style={{ marginBottom: "50px" }}>Hire Developer<FaArrowRight size={25} style={{ marginLeft: "10px", marginTop: "-1px" }} /></Button></Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <BlogNavbar />

            {webblogs.map(item => {
                return (
                    <Container key={item._id}>
                        <Link href={`/blog/${item.slug}`} >
                            <Container>
                                <Row className={styles.casestudiescontainer} >
                                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                                        <img src={item.image} width={500} height={350} className={styles.casestudiesimage} alt={item.alt} />
                                    </Col>

                                    <Col>

                                        <Container className='d-flex flex-column mt-5'>

                                            <span className={styles.casestudiesrightindustry}>{item.category}</span>
                                            <Link href={`/blog/${item.slug}`} passHref><a className={styles.casestudiesrighttitle}>{item.title}</a></Link>
                                            <p className={styles.casestudiesrightpara} style={{ overflowWrap: "break-word" }}>{item.description}</p>

                                            <div className='d-flex flex-row justify-content-between'>
                                                <span className={styles.casestudiesrightcountrytext}>{item.datepublished}</span>
                                            </div>

                                        </Container>

                                    </Col>

                                </Row>

                            </Container>
                        </Link>
                    </Container>
                )
            })}

        </>
    )
}
export async function getServerSideProps() {
    await dbConnect();
    const webblogs = await Blog.find({ category: "Web" }).lean()
    const reversedblog = webblogs.reverse()
    return {
        props: {
            webblogs: reversedblog.map(item => convertDocToObj(item)),
        },
    };
}

export default BlogWeb