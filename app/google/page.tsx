"use client"
import { Stack, Typography, Input, InputLabel, Box } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";
import styles from './page.module.css'

export default function SearchHome() {
    return (
        <Stack direction={'column'} className={styles.pageContainer}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'}>
                    <Link href={'/'}>
                        About
                    </Link>
                    <Link href={'/'}>
                        Store
                    </Link>
                </Stack>
                <Stack direction={'row'}>
                    <Link href={'/'}>
                        Mail
                    </Link>
                    <Link href={'/'}>
                        Images
                    </Link>
                    <Link href={'/'}>
                        <AppsIcon />
                    </Link>
                    <Link href={'/'}>
                        <AccountCircleIcon className={styles.profilePicture} />
                    </Link>
                </Stack>
            </Stack>
            <Box>
                <Typography variant={'h1'} className={styles.searchLogo}>
                    <span className={styles.searchLogoLetterBlue}>S</span>
                    <span className={styles.searchLogoLetterRed}>e</span>
                    <span className={styles.searchLogoLetterYellow}>a</span>
                    <span className={styles.searchLogoLetterBlue}>r</span>
                    <span className={styles.searchLogoLetterGreen}>c</span>
                    <span className={styles.searchLogoLetterRed}>h</span>
                </Typography>
            </Box>
            <div className={styles.searchBox}>
                <SearchIcon />
            </div>
            <Stack direction={'row'} justifyContent={'space-between'} className={styles.footer}>
                <Typography className={styles.footerLink} variant={'body2'}>Advertising</Typography>
                <Typography className={styles.footerLink} variant={'body2'}>Business</Typography>
                <Typography className={styles.footerLink} variant={'body2'}>Special mission</Typography>
                <Typography className={styles.footerLink} variant={'body2'}>Privacy</Typography>
                <Typography className={styles.footerLink} variant={'body2'}>Terms</Typography>
                <Typography className={styles.footerLink} variant={'body2'}>Settings</Typography>
            </Stack>
        </Stack>
    );
}