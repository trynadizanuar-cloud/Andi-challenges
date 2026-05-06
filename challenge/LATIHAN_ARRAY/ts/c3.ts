type manage = (arr: any[], operations: string[]) => { result: any[], log: string[] };
const manageStack: manage = (arr, operations) => {
    const stack: (string | number)[] = [...arr]; // salin array awal agar tidak berubah
    const log: string[] = [];

    for (let i = 0; i < operations.length; i++) {
        const operasi = operations[i];

        if (operasi.startsWith("push:")) {
            let nilai: string | number = operasi.split(":")[1];

            if (!isNaN(Number(nilai))) {
                nilai = Number(nilai);
            }
            stack.push(nilai);
            log.push(`Added ${nilai}`);

        } else if (operasi === "pop") {
            const nilaiDihapus = stack.pop();
            log.push(`Removed ${nilaiDihapus}`);
        }
    }

    return {
        result: stack,
        log: log,
    };
};

// driver code
console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));

export { }