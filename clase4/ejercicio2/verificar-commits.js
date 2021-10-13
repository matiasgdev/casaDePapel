const asyncExec = require('./async-exec')

// /arteysoft/ic
let repo = process.argv[2] || "arteysoft/ic"
let commitsCacheados = [];
let hits = 0;

if (!repo) {
    throw new Error("Debes asignar un repositorio");
}

function pausa() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
}

async function verificarCommits() {
    let comando = `curl -u abcde:abcde https://api.github.com/repos/${repo}/commits`;

    const { stdout } = await asyncExec(comando);

    let json = JSON.parse(stdout);

    let commits = Array.isArray(json)
        ? json.map((z) => z.sha)
        : json["sha"];
    

    return commits;
}

(async function () {
    commitsCacheados = await verificarCommits();
    for (;;) {
        await pausa();
        try {
            let date = new Date().toLocaleString();
            let commits = await verificarCommits();

            if (hits && commits.length === commitsCacheados.length) {
                console.log("No hay actualizaciones", date);
            } else {
                console.log("Commits historicos");
                console.log(commitsCacheados);
                console.log("Nuevos commits");
                console.log(commits);
                console.log();
            }

            if (commits.length > commitsCacheados.length) {
                console.log("DISPARANDO PROCESO !!!!!");
                // process.exit()
                // disparar un proceso para clonar el siguiente commit
                // asignar a listaCommits el nuevosCommits
            }

            hits++;
        } catch (err) {
            console.log("se produjo un error");
            console.log(err);
        }
    }
})();
