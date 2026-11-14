
import dns from 'dns';

// 1. dns.lookup()
dns.lookup('google.com', (err, address) => {
    if (err) {
        console.log(err);
    } else {
        console.log("IP Address:", address);
    }
});

// 2. dns.resolve4()
dns.resolve4('google.com', (err, addresses) => {
    if (err) {
        console.log(err);
    } else {
        console.log("IPv4 Addresses:", addresses);
    }
});

// 3. dns.resolveMx()
dns.resolveMx('gmail.com', (err, records) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MX Records:", records);
    }
});
