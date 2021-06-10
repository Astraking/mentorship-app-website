import React from 'react';
import '../styles/contributors.css';

interface GitHubProfileProps {
    userName: string;
    role: string;
}
// User details of all contributors
const contributors: GitHubProfileProps[] = [
    {
        userName: 'pktwum96',
        role: 'Project Manager',
    },
    {
        userName: 'Kumbong',
        role: 'Tech Lead',
    },
    {
        userName: 'EJAyarma',
        role: 'Front-End Engineer',
    },
    {
        userName: 'esmond-adjei',
        role: 'Front-End Engineer',
    },
];

export const GitHubProfile = (props: GitHubProfileProps) => {
    const [name, setName] = React.useState(undefined);
    const [location, setLocation] = React.useState(undefined);
    const { userName, role } = props;

    React.useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            res.json()
                .then((res) => {
                    setName(res.name);
                    setLocation(res.location);
                })
                .catch((err) => alert(err));
        }

        fetchData();
    });

    return (
        <div className="contributor">
            <a
                href={`https://github.com/${userName}`}
                rel="noreferrer"
                target="_blank"
                className="contibutor-profile-link"
            >
                <img
                    alt={`GitHub of ${name} `}
                    src={`https://github.com/${userName}.png?size=200`}
                    className="contibutor-profile-image"
                />
                <div className="contributor-details">
                    <p>{name}</p>
                    <p>
                        <strong>{role}</strong>
                    </p>
                    <p>
                        <em>{location}</em>
                    </p>
                </div>
            </a>
        </div>
    );
};

export const Contributors = () => {
    return (
        <div className="contributor-page">
            <header>
                <h2>Contributors</h2>
            </header>
            <div className="contributor-panel">
                {contributors.map((contributor, index) => (
                    <GitHubProfile
                        key={index}
                        role={contributor.role}
                        userName={contributor.userName}
                    />
                ))}
            </div>
        </div>
    );
};
