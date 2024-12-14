import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '1m',
};

export default function () {
    http.get('http://localhost:5000/api/values'); // Replace with your target endpoint
    sleep(1); // 1-second delay to maintain 1 request per second per VU
}
