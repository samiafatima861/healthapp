const app = require('./app');

// Use port 8080 instead of 3000 in case there are permission issues
const PORT = process.env.PORT || 3000;

// Start server with detailed logging
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log(' Server Status:');
    console.log(` Server is running on port ${PORT}`);
    console.log(` Try these URLs:`);
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log('');
    console.log('Press Ctrl+C to stop the server');
    console.log('');
});

// Handle server errors
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        console.error('Server error:', error);
        process.exit(1);
    }

    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${PORT} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`Port ${PORT} is already in use`);
            process.exit(1);
            break;
        default:
            console.error('Server error:', error);
            process.exit(1);
    }
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
}); 