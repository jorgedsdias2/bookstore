export default function Logout({ history }) {
    localStorage.removeItem('token');
    history.push('/login');

    return null;
}