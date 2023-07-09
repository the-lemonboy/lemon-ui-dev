

export const converse =  (param,node,direction)=>{
        const unit = param.replace(/\d/g, "")
        const number = parseFloat(param.match(/\d+/)[0]);
        let pxValue=null
        let defaultRootFontSize=null
        if (unit==='em' || unit==='%'){
         console.error("Units cannot be % and em！");
         return;
        }
        else if(unit === 'rem'){
        defaultRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        pxValue= defaultRootFontSize*number
        // 打印根节点字体大小的默认值
        console.log('Default Root Font Size:', defaultRootFontSize);
      }
      // else if(unit=='em'){
      //   let theParentNode = node.parentNode
      //   defaultRootFontSize = parseFloat(getComputedStyle(theParentNode).fontSize);
      //   pxValue= defaultRootFontSize*number
      // }
      else if(unit === 'vw' || unit==='vh'){
        let viewportValue=null
         if(unit==='vw'){
             viewportValue = window.innerWidth || document.documentElement.clientWidth;
            
         }else{
             viewportValue = window.innerWidth || document.documentElement.clientWidth;
         }
            pxValue=(number/100)*viewportValue

      }
      // else if(unit==='%'){
      //   let theParentNodeValue=null
      //   if(direction==='width'){
      //       theParentNodeValue = node.parentNode.offsetWidth
      //   }else{
      //       theParentNodeValue = node.parentNode.offsetHeight 
      //   }
      //   pxValue=(theParentNodeValue*(number/100)).toFixed(2)
      // }
      else if(unit === 'px' || unit === ''){
        pxValue = number;
      }
      return pxValue;

}



