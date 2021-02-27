import React from 'react';
import '../App.css';
import { List, Card, Icon, Grid, Image } from 'semantic-ui-react';


const Result = (props) => {

    const { name, followers, following, avatar_url } = props;
    const { repos } = props;
    console.log("Repos is:", repos.data);

    const listRepos =
        repos.length !== 0 ? (
            repos.data.map((item) => (


                <Card>
                    <Card.Content>
                        <Card.Header><a href={item.html_url}>{item.name}</a></Card.Header>
                        <Card.Description>
                            {!item.description ? "It has no description" : item.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='star' />{item.stargazers_count}
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='code' />{!item.language ? "N/A" : item.language}
                    </Card.Content>
                </Card>

            )
            )) : (
                <div>No repos found</div>
            );
    const mystyle = {
        display: "grid",
        gridTemplateColumns: "minmax(300px, max-content) repeat(auto-fill, 300px) 28%"


    };

    return (
        <div>
            <div className="result">
                <div className="image-avatar">
                    <div >
                        <Image
                            floated='left'
                            size='small'
                            src={avatar_url}
                        /></div>
                    <div className={name ? "owner" : "no-show"} ><span>{name}</span></div>
                </div>
                <Card.Content extra>
                    <a className={followers ? "form-input form-input-fail" : "no-show"}>
                        <Icon name='user' />{followers} Followers</a>
                </Card.Content>
                <Card.Content extra>
                    <a className={following ? "form-input form-input-fail" : "no-show"}>
                        <Icon name='user' />{following} Following</a>
                </Card.Content>
                <List className="repo-list">
                    <List.Item style={mystyle}>{listRepos}</List.Item>

                </List>

            </div>
        </div>
    );
}

export default Result;