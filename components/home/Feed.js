import React from 'react'
import { BsStar } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from './Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-[10] p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [{
        displayName: 'Greatness',
        username: '0x122j3jjdkk4883889298489jjj',
        avatar: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/122027121_2863004370586055_3286699311070549134_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=bSY3PEht0hoAX_Ke9el&_nc_ht=scontent.flos1-1.fna&oh=00_AT83dTlqUzCxjp6ERBCoZFO4RjwJ7DBBoM0qiJZU8Uo6rQ&oe=62609C63',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z',
    },
    {
        displayName: 'Greatness',
        username: '0x122j3jjdkk4883889298489jjj',
        avatar: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/122027121_2863004370586055_3286699311070549134_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=bSY3PEht0hoAX_Ke9el&_nc_ht=scontent.flos1-1.fna&oh=00_AT83dTlqUzCxjp6ERBCoZFO4RjwJ7DBBoM0qiJZU8Uo6rQ&oe=62609C63',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2021-06-01T12:00:00.000Z',
    },
    {
        displayName: 'Greatness',
        username: '0x122j3jjdkk4883889298489jjj',
        avatar: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/122027121_2863004370586055_3286699311070549134_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=bSY3PEht0hoAX_Ke9el&_nc_ht=scontent.flos1-1.fna&oh=00_AT83dTlqUzCxjp6ERBCoZFO4RjwJ7DBBoM0qiJZU8Uo6rQ&oe=62609C63',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-06-01T12:00:00.000Z',
    },
    {
        displayName: 'Greatness',
        username: '0x122j3jjdkk4883889298489jjj',
        avatar: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/122027121_2863004370586055_3286699311070549134_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=bSY3PEht0hoAX_Ke9el&_nc_ht=scontent.flos1-1.fna&oh=00_AT83dTlqUzCxjp6ERBCoZFO4RjwJ7DBBoM0qiJZU8Uo6rQ&oe=62609C63',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z',
    },
    {
        displayName: 'Greatness',
        username: '0x122j3jjdkk4883889298489jjj',
        avatar: 'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/122027121_2863004370586055_3286699311070549134_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=bSY3PEht0hoAX_Ke9el&_nc_ht=scontent.flos1-1.fna&oh=00_AT83dTlqUzCxjp6ERBCoZFO4RjwJ7DBBoM0qiJZU8Uo6rQ&oe=62609C63',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2019-06-01T12:00:00.000Z',
    },
]

const Feed = () => {
    return ( <
        div className = { style.wrapper } >
        <
        div className = { style.header } >
        <
        div className = { style.headerTitle } > Home < /div> <
        BsStar / >
        <
        /div> <
        TweetBox / > {
            tweets.map((tweet, index) => ( <
                Post key = { index }
                displayName = { tweet.displayName }
                username = { `${tweet.username.slice(0, 4)}...${
            tweet.username.slice() - 4
          }` }
                avatar = { tweet.avatar }
                text = { tweet.text }
                isProfileImageNft = { tweet.isProfileImageNft }
                timestamp = { tweet.timestamp }
                />
            ))
        } <
        /div>
    )
}

export default Feed