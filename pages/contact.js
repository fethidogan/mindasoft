import { Store } from "../utils/store"
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import React, { useState, useRef, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import styles from "../styles/Contact.module.css"
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const router = useRouter()
    const { state, dispatch } = useContext(Store);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const submitHandler = async ({ name, mail, message }) => {
        try {
            await axios.post("/api/sendrequest", { name, mail, message })
            dispatch({ type: "FORM_SENT" })
            router.push("/")
        }
        // error messages
        catch (error) {
            console.log(error.response.data)
        }
    }


    return (
        <>

            <Head>
                <title>Contact Us | Mindasoft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Do you need a web app or mobile app for your business or invidual needs ? We can build your high quality, fast and secure application. Contact us at info@mindasoft.com"></meta>

                <meta property="og:url" content="https://www.mindasoft.com/contact" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Contact Us | Mindasoft" />
                <meta property="og:description" content="Do you need a web app or mobile app for your business or invidual needs ? We can build your high quality, fast and secure application. Contact us at info@mindasoft.com" />
                <meta property="og:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Mindasoft" />
                <meta name="twitter:description" content="Do you need a web app or mobile app for your business or invidual needs ? We can build your high quality, fast and secure application. Contact us at info@mindasoft.com" />
                <meta name="twitter:image" content="https://www.mindasoft.com/images/mindasoftlogo.png" />
                <link rel="canonical" href="https://www.mindasoft.com/contact" />
            </Head>
            <Container className={styles.contactcontainer}>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
                <Row >
                    <Col xs={12} md={6} lg={6}>
                        <h1 className={styles.specializedheading}>Contact Us</h1>
                        <h2 className={styles.specializedsubheading}>Tell us about your project.</h2>
                        <p className={styles.specializedparalong}>We will contact you in a short amount of time we receive your request and we will send you a detailed E-mail about the project.</p>
                        <p className={styles.specializedparalong}>Have an idea?</p>
                        <a href="mailto:sales@mindasoft.com" className={styles.mail}>info@mindasoft.com</a>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form onSubmit={handleSubmit(submitHandler)}>
                            <List>
                                <ListItem>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: true,
                                            minLength: 2,
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                id="standard-basic"
                                                label="Full Name"
                                                variant="standard"
                                                fullWidth
                                                inputProps={{ type: 'name' }}
                                                error={Boolean(errors.name)}
                                                helperText={
                                                    errors.name
                                                        ? errors.name.type === 'minLength'
                                                            ? 'Name length is more than 2'
                                                            : 'Name is required'
                                                        : ''
                                                }
                                                {...field}
                                            />
                                        )}
                                    ></Controller>
                                </ListItem>

                                <ListItem>
                                    <Controller
                                        name="mail"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: true,
                                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                variant="standard"
                                                fullWidth
                                                inputProps={{ type: 'mail' }}
                                                error={Boolean(errors.mail)}
                                                helperText={
                                                    errors.mail
                                                        ? errors.mail.type === 'minLength'
                                                            ? 'Email is not valid'
                                                            : 'Email is required'
                                                        : ''
                                                }
                                                {...field}
                                            />
                                        )}
                                    ></Controller>
                                </ListItem>

                                <ListItem>
                                    <Controller
                                        name="message"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: true,
                                            minLength: 30,
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                id="standard-basic"
                                                label="Message"
                                                variant="standard"
                                                fullWidth
                                                multiline
                                                rows={3}
                                                inputProps={{ type: 'message' }}
                                                error={Boolean(errors.message)}
                                                helperText={
                                                    errors.message
                                                        ? errors.message.type === 'minLength'
                                                            ? 'Message length cant be less than 30'
                                                            : 'Message is required'
                                                        : ''
                                                }
                                                {...field}
                                            />
                                        )}
                                    ></Controller>
                                </ListItem>

                                <ListItem>
                                    <Button variant="contained" type="submit" fullWidth color="primary">
                                        Send Message
                                    </Button>
                                </ListItem>

                            </List>
                        </Form>

                    </Col>

                </Row>

            </Container>

        </>
    );
}