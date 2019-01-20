import React from "react";
import "../css/EditTable.css"


export default class EditTable extends React.Component {
    constructor(){
        super()
        this.state = {
            obj:{
                data: [
                    {col_header: "Unnamed: 0", imported_as: null, drop: true, cosine: "NA"}, 
                    {col_header: "Depot", imported_as: ["Depot", "ActivityDate", "Customer", "Inventory", "SKU", "Unnamed"], drop: false, cosine: "high"}, {col_header: "SKU", imported_as: ["SKU", "ActivityDate", "Customer", "Depot", "Inventory", "Unnamed"], drop: false, cosine: "high"}, 
                    {col_header: "Customer", imported_as: ["Customer", "ActivityDate", "Depot", "Inventory", "SKU", "Unnamed"], drop: false, cosine: "high"}, {col_header: "ActivityDate", imported_as: ["ActivityDate", "Customer", "Depot", "Inventory", "SKU", "Unnamed"], drop: false, cosine: "high"}, {col_header: "Inventory", imported_as: ["Inventory", "ActivityDate", "Customer", "Depot", "SKU", "Unnamed"], drop: false, cosine: "high"}
                        ], 
                    status: 400 
            },
            check:{value: ""}
        
        };
        //this.loadTable = this.loadTable.bind(this);
        //this.postData = this.postData.bind(this);
        this.fillTable = this.fillTable.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fillTable() 
       
        
    }


    handleChange(event){
       this.checkInput() //where do i put this method? Is it even useful
       console.log(event);
       this.setState.check({value:event.target.value});
    }
    // async postData(url, bodyObj) {
    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(bodyObj)
    //     });
    //     const body = await response.json();
    //     return body;
    // }

    // loadTable(e) {
    //     this.postData("/upload_api")
    //         .then(res => {
    //             if (res["status"] === 400) {
    //                 console.log(res)
    //             } else {
    //                 console.log(res);
    //                 alert("error reload table");
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    fillTable(){
        var i;
        var j;
        var totalDataRows = this.state.obj.data;
            for(i=0; i<totalDataRows.length; i=i+1){
                var data=totalDataRows[i]
                
                //First Column
                var newRow = document.createElement("TR")
                newRow.classList.add("tr")
                newRow.classList.add(`tr${i+1}`)
                var data1 = document.createElement("TD")
                // data1.setAttribute("className", "r"+i+"c0")
                data1.classList.add(`td`);
                data1.classList.add(`td1`);
                var val1 = document.createTextNode(data.col_header)
                data1.appendChild(val1)
                newRow.appendChild(data1)
                
                //Second Column
                var data2 = document.createElement("TD")
                data2.classList.add(`td`);
                data2.classList.add(`td2`);
                var select = document.createElement("SELECT")
                if (data.imported_as){
                    for(j=0; j<data.imported_as.length; j=j+1){
                        var options = document.createElement("OPTION")  
                        options.value=data.imported_as[j]
                        options.innerHTML = data.imported_as[j]
                        select.appendChild(options)       
                    } 
                    data2.appendChild(select)
                }
                newRow.appendChild(data2)
                
                //Third Column
                var data3 = document.createElement("TD")
                data3.classList.add(`td`);
                data3.classList.add(`td3`);
                var check = document.createElement("input")
                check.setAttribute("type", "checkbox")
                data3.appendChild(check)
                newRow.appendChild(data3)
                
                //Fourth Column
                var data4 = document.createElement("TD")
                data4.classList.add(`td`);
                data4.classList.add(`td4`);
                var check2 = document.createElement("input")
                check2.classList.add(`check-${i+1}`)
                check2.setAttribute("type", "checkbox")
                // check2.setAttribute("onchange", "{this.handleChange.bind(this)}")
                check2.addEventListener("change", function(e) {
                    var className = e.target.classList[0];
                    var index = parseInt(className.substring(className.indexOf("-")+1, className.length));
                    var row = document.querySelector(`.tr${index} > .td2 > select`);
                    console.log(row)
                    if(row.disabled) {
                        row.disabled = false;
                    }else {
                        row.disabled = true;
                    }
                })
                data4.appendChild(check2)
                newRow.appendChild(data4)


                document.querySelector(".tBody").appendChild(newRow)

            }
    }

    checkInput(){
        console.log("checkInput entered")
        var trList = document.getElementsByClassName("tr"); //taking list of tr elements

        // looping tr elements to check for 3rd child if checked, disable first child (select)
        for(var i=0; i<trList.length; i++){
            var dropCell = trList[i].children[3] //this refers to the dropheader td
            if(dropCell.getAttribute("checked")){
                document.getElementById(String(trList[i].children[1].toString)).disabled
                this.state.check.concat(trList[i].children[1])
            }
        }
        console.log(this.state.check)


    }
    
    render() {
        return(
            <div className = "table-container">
                <table className="table" id="table" >
                    <tbody className="tBody">
                        <tr className="header-edittable header-value">
                            <th>CSV Headers</th>
                            <th>Valid Headers</th> 
                            <th>Rename Header</th>
                            <th>Drop Header</th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )


    }

}