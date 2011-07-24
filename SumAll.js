
    function sumAll(){
        var args = arguments;
        
        if(args.length > 0) {
           var element = args[args.length - 1];
           var left = Array.prototype.slice.call(args, 0, args.length - 1);
           return element + sumAll.apply(window, left) ;
        }
        else{
         return 0;   
        }
    }