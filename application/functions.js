(function(w, a)
{
    w.encrypt = function(m, k)
    {
        k = typeof k === 'undefined' ? a.element(document).injector().get('secret') : k;
        var e = w.CryptoJS.AES.encrypt(m, k);
        return e.toString();
    };

    w.decrypt = function(m, k)
    {
        k = typeof k === 'undefined' ? a.element(document).injector().get('secret') : k;
        var d = w.CryptoJS.AES.decrypt(m, k);
        return d.toString(w.CryptoJS.enc.Utf8);
    };
})(window, angular);
