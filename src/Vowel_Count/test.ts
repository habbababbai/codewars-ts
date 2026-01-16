import { Kata} from './index';
import {assert} from "chai";

describe("getCount", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(Kata.getCount("abracadabra"), 5)
    });
});