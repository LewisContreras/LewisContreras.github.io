import {  Box, Button, Center, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React, { useState } from 'react'

const FormContact = () => {

    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues:{
            namePerson:"",
            email:"",
            message:""
        },
        validationSchema: Yup.object({
            namePerson: Yup.string().required("Este campo es requerido"),
            email: Yup.string().email("Debe ingresar un correo").required("Este campo es requerido"),
            message: Yup.string().required("Este campo es requerido")
        }),
        validateOnChange : values =>{
            console.log(values);
        },
        onSubmit: values =>{
            setSubmit(false)
            let sendEmail = document.createElement("a")
            sendEmail.setAttribute("href", `mailto:legiconba4@gmail.com?subject=${values.namePerson} ${values.email}&body=${values.message}`)
            sendEmail.click()
        }
    })

    return (
        <Center id="contact" py="40px" w="100vw" minH="calc(100vh - 140px)" bgColor="terciary" >
            <VStack spacing="10px" px="10px" py="10px" as="form" onSubmit={formik.handleSubmit} borderRadius="8px" w={["94%","500px"]} bgColor="primary" >
                <Text fontSize="3xl" color="secondary" fontWeight="600" >Contacto</Text>
                <Text fontSize="xl" color="terciary" >Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</Text>
                <Input type="text" color="terciary" name="namePerson" value={formik.values.namePerson} onChange={formik.handleChange}  placeholder="Nombre Completo" />
                {formik.errors.namePerson && submit ? <Box color="secondary" >{formik.errors.namePerson}</Box>:null}
                <Input type="email"  color="terciary" placeholder="Correo" name="email" value={formik.values.email} onChange={formik.handleChange}  />
                {formik.errors.email && submit ? <Box color="secondary" >{formik.errors.email}</Box>:null}
                <Textarea h="120px" color="terciary" placeholder="Mensaje..." name="message" value={formik.values.message} onChange={formik.handleChange}  ></Textarea>
                {formik.errors.message && submit ? <Box color="secondary" >{formik.errors.message}</Box>:null}
                <Button type="submit" onClick={()=>setSubmit(true)} _hover={{textDecoration:"none"}} _focus={{outline:"none"}}  colorScheme="teal" >Enviar</Button>
            </VStack>
        </Center>
    )
}

export default FormContact
