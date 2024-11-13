// Blastoise
const args = Deno.args;

const endpoint = "http://localhost:8080/testing";
const body = {
    method: "POST",
    body: JSON.stringify({
        payload: args[0],
    }),
    headers: {
        "content-type": "application/json",
        u_: "b1a74559bea16b1521205f95f07a25ea2f09f49eb4e265fa6057036d1dff7c22",
    },
};

console.table({ endpoint, ...body });

export async function handler() {
    const request = new Request(endpoint, body);

    await fetch(request);
}

console.time("requests");
for (let i = 0; i < 10000; i++) {
    await handler();
}
console.timeEnd("requests");
