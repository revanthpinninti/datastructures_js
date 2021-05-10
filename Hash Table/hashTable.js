class HashTable {
    constructor(size=17) {
        this.keymap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for(let i=0; i<Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keymap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keymap[index]) {
            this.keymap[index] = [];
        }
        this.keymap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keymap[index]) {

            for(let i=0; i< this.keymap[index].length; i++) {
                if(this.keymap[index][i][0] === key){
                    return this.keymap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArr=[];

        for(let i=0; i< this.keymap.length; i++) {
            if(this.keymap[i]){
                for(let j=0; j< this.keymap[i].length; j++){
                    if(!valuesArr.includes(this.keymap[i][j][1]))
                        valuesArr.push(this.keymap[i][j][1]);
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr=[];

        for(let i=0; i< this.keymap.length; i++) {
            if(this.keymap[i]){
                for(let j=0; j< this.keymap[i].length; j++){
                    if(!keysArr.includes(this.keymap[i][j][0]))
                        keysArr.push(this.keymap[i][j][0]);
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("i love", "pizza");
ht.set("cats", "pizza");
ht.set("rats", "are fine");
console.log(ht);
console.log(ht.get("i love"));
console.log(ht.values());
console.log(ht.keys());