import React, { useEffect, useState } from 'react';
import '../App.css';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import Result from './Result';


const Search = () => {

    const [userInput, setUserInput] = useState('');
    const [repos, setRepos] = useState([]);
    const [name, setName] = useState('');
    const [followers, SetFollowers] = useState('');
    const [following, SetFollowing] = useState('');
    const [avatar_url, SetAvatar_url] = useState ('');


    const handleSearch = e => {
        setUserInput(e.target.value);
    };
    const handleSubmit = () => {
        console.log(userInput);
        fetch(`https://api.github.com/users/${userInput}`, {
            method: "GET",
            headers: {
                Authorization: `token 48cf367f20ac305bacdac693aadfeca9ba8dd668 `
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    };
    const setData = ({
        name,
        followers,
        following,
        avatar_url
    }) => {
        setName(name);
        SetFollowers(followers);
        SetFollowing(following);
        SetAvatar_url(avatar_url);
    };
    const handleClick = async () => {
        console.log(userInput);

        try {
            const result = await axios(`https://api.github.com/users/${userInput}/repos`);
            setRepos(result);
        } catch (err) {
            console.log(err);
        }
    };
;
    return (
        <>
            <div>
                <div className='nav-header'>GitHub Search</div>
                <div className='search'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Input placeholder='Gitbhub User' name='gitbhub user' onChange={handleSearch} />
                            <Form.Button onClick={handleClick} content='Search'></Form.Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <Result repos={repos} name={name} followers={followers} following={following} avatar_url={avatar_url} />
        </>
    );
}

export default Search;
