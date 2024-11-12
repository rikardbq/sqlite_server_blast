const args = Deno.args;
const commands = Array(32).fill(undefined).map(() =>
    new Deno.Command(Deno.execPath(), {
        args: [
            "task",
            "blast",
            args[0] ?? "some_token",
        ],
    })
);

commands.forEach(async (c) => {
    const { stdout } = await c.output();
    console.log(new TextDecoder().decode(stdout));
});
