const connection = async () => {
    const con = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Jesh',
        database: 'coffe_dev'
    });
    await con.connect();
    console.log('connected as id ' + con.threadId);
    return con.promise();
}


export default connection;

