import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react'
import { Layout } from '../components/Layout';
import Cookies from 'js-cookie';

interface Props {
    theme: string
}
const themeChanger: FC<Props> = ({ theme }) => {

    const [currentTheme, setCurrentTheme] = useState(theme);

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const themeToChange = event.target.value;
        Cookies.set('theme', themeToChange)
    }


    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={onThemeChange}
                        >
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='Custom' />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { theme = 'light' } = req.cookies;

    const validThemes = ['light', 'dark', 'custom'];

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'light'
        }
    }
}

export default themeChanger;