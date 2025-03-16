
async function apiCall() {
    
    const response = await fetch('https://exercisedb-api.vercel.app/api/v1/muscles/triceps/exercises')
    if (!response.ok) {
        console.log('error')
    }
    const body = await response.json();
    console.log(body.data)
    
}

apiCall();

async function partsbody() {
    const response = await fetch('https://exercisedb-api.vercel.app/api/v1/bodyparts')
    if (!response.ok) {
        console.log('error')
    }
    const body = await response.json()
    console.log(body)
}

// partsbody();