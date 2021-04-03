class Stack{
    constructor(num,x,y,size){
        this.group = []
        var changeX = 0;
        var changeY = 0;
        var changeNum = num;
        var layers = (num+1)/2
        
        for(var ii=0;ii<layers;ii++ ){
            for(var i=0;i<changeNum;i++ ){
                var box = new Box(x+changeX,y+changeY,size,size);
    
                this.group.push(box);
    
                //changeNum -= 1;
                changeX += size;
            }
            changeNum -= 2;
            changeY = -(size*ii);
            changeX = 0;
            changeX = size*(ii+1);
        }
        
    
    }
    display(){
        var i = 0
        for(i =0;i<this.group.length;i++){
            this.group[i].display();
        }
        

    }
}