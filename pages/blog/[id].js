import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styles from "../../styles/Blog.module.css"
import { AiOutlineCalendar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, RedditShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, WhatsappIcon } from "react-share";
import Head from 'next/head'
import Blog from '../../models/blog';
import dbConnect from '../../utils/db'
import convertDocToObj from '../../utils/convert';


const BlogDetails = ({ post, random }) => {
    return (
        <>
            <Head>
                <title>{post.title} | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={post.description}></meta>

                <meta property="og:url" content={`https://www.mindasoft.com/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content={post.image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.description} />
                <meta name="twitter:image" content={post.image} />
                <link rel="canonical" href={`https://www.mindasoft.com/blog/${post.slug}`} />
            </Head>

            <Container className={styles.sharecontainer}>
                <Container className='mt-5 '>
                    <span className={styles.sharetext}>Share</span>
                </Container>

                <FacebookShareButton
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                    url={`https://www.mindasoft.com/blog/${post.slug}`}
                    quote={post.title}
                >
                    <FacebookIcon size={45} round />
                </FacebookShareButton>


                <TwitterShareButton
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                    title={post.title}
                    url={`https://www.mindasoft.com/blog/${post.slug}`}
                >
                    <TwitterIcon size={45} round />
                </TwitterShareButton>

                <LinkedinShareButton
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                    title={post.title}
                    url={`https://www.mindasoft.com/blog/${post.slug}`}
                >
                    <LinkedinIcon size={45} round />
                </LinkedinShareButton>

                <RedditShareButton
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                    title={post.title}
                    url={`https://www.mindasoft.com/blog/${post.slug}`}
                >
                    <RedditIcon size={45} round />
                </RedditShareButton>

                <WhatsappShareButton
                    style={{ marginLeft: "10px" }}
                    title={post.title}
                    url={`https://www.mindasoft.com/blog/${post.slug}`}
                >
                    <WhatsappIcon size={45} round />
                </WhatsappShareButton>


            </Container>
            <Container>
                <h1 className={styles.blogdetailstitle} style={{ textAlign: "start", marginTop: "30px" }}>{post.title}</h1>
                <div className='d-flex'>

                    <div className='d-flex justify-content-center align-items-center'>
                        <AiOutlineCalendar size={30} color="#b3b3b3" />
                        <span className={styles.casestudiesrightpara} style={{ marginBottom: "0px", marginLeft: "5px", letterSpacing: "2px", color: "#b3b3b3", overflowWrap: "break-word" }}>{post.datepublished}</span>
                    </div>

                    <div className='d-flex justify-content-center align-items-center' style={{ marginLeft: "30px" }}>
                        <BsFillPersonFill size={30} color="#b3b3b3" />
                        <span className={styles.casestudiesrightpara} style={{ marginBottom: "0px", marginLeft: "5px", letterSpacing: "2px", color: "#b3b3b3" }}>Author : Fethi Dogan</span>
                    </div>
                </div>

                <div className={styles.blogdetailparacontainer} style={{ overflowWrap: "break-word" }} 
                dangerouslySetInnerHTML={{ __html: post.text }}>
                   
                </div>

            </Container>

            <Container>
                <h2 className='text-center mt-5' style={{ fontSize: "40px", fontFamily: "Poppins", fontWeight: "400" }}>Posts you might interest</h2>
            </Container>

            <Container className='d-flex justify-content-center align-items-center mt-2'>
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <Card style={{ width: '18rem', border: "0px" }}>
                            <a href={`/blog/${random[0].slug}`}><Card.Img variant="top" src={random[0].image} width={100} height={160} alt={random[0].alt} /></a>
                            <Card.Body>
                                <a href={`/blog/${random[0].slug}`}><Card.Title style={{ fontSize: "20px", fontFamily: "Poppins", fontWeight: "400" }}>{random[0].title}</Card.Title></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <Card style={{ width: '18rem', border: "0px" }}>
                            <a href={`/blog/${random[1].slug}`}><Card.Img variant="top" src={random[1].image} width={100} height={160} alt={random[1].alt} /></a>
                            <Card.Body>
                                <a href={`/blog/${random[1].slug}`}><Card.Title style={{ fontSize: "20px", fontFamily: "Poppins", fontWeight: "400" }}>{random[1].title}</Card.Title></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export async function getServerSideProps({ params, res }) {
    await dbConnect();
    const { id } = params;
    const post = await Blog.findOne({ slug: id }).lean()
    if (!post) {
        return {
            notFound: true
        }

    } else {
        const randompost = await Blog.aggregate([{ $sample: { size: 2 } }])
        const idstringed = { ...post, _id: post._id.toString() }
        return {
            props: {
                post: idstringed,
                random: randompost.map(item => convertDocToObj(item))
            },
        };
    }
}

export default BlogDetails