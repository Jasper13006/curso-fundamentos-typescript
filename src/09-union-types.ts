(() => {
    let userId: string | number;
    userId = 1212;
    userId = '1212';

    function greeting(mytext: string | number) {
        if (typeof mytext === 'string') {
            return 'Hola ' + mytext;
        }
    }
    greeting('asa');
    greeting(1212)
})