'use strict';
/**
 * This a fake database wrapper.  
 * It simulates calls to a DB, and isn't part of the test.
 **/

exports.db = {
    query (q) {
        return true;
    }
}
