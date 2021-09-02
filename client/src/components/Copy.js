function Copy(props) {
    function Copy() {  
        const link = "http://localhost:3001/"+props.data
        navigator.clipboard.writeText(link);
    }

    return <button onClick={Copy}>Copy</button>
}

export default Copy;