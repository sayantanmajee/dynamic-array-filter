const data = [
    {
      tm_number: "9724084103",
      tm_name: "PRADIP BHAI",
      zsm_number: "9974252013",
      zsm_name: "Jay Ambe1 Communicati",
      zbm_number: "1234567890",
      zbm_name: "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      zone_name: "Surat",
      circle_name: "Gujarat",
      category: "Challenge"
    },
    {
      tm_number: "9724084103",
      tm_name: "PRADIP duplicate",
      zsm_number: "9974252013",
      zsm_name: "Jay Ambe1 Communicati",
      zbm_number: "1234567890",
      zbm_name: "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      zone_name: "Surat",
      circle_name: "Gujarat",
      category: "Challenger"
    },
    {
      tm_number: "9724084105",
      tm_name: "PRADIP BHAI",
      zsm_number: "9974252013",
      zsm_name: "Jay Ambe Communicati",
      zbm_number: "1234567890",
      zbm_name: "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      zone_name: "Surat",
      circle_name: "Gujarat",
      category: "Challenger"
    },
    {
      tm_number: "972484103",
      tm_name: "SK BHAI",
      zsm_number: "9974252013",
      zsm_name: "Jay Ambe 2 Communicati",
      zbm_number: "1234567890",
      zbm_name: "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      zone_name: "Surat",
      circle_name: "Gujarat",
      category: "Challenger"
    },
    {
      tm_number: "972484103",
      tm_name: "SK BHAI",
      zsm_number: "9974252013",
      zsm_name: "Jay Ambe 3 Communicati",
      zbm_number: "1234567890",
      zbm_name: "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      zone_name: "Surat",
      circle_name: "Gujarat",
      category: "Challenger"
    }
  ];
  
// function to filterout data on dynamic key
function filterOnKey(dynamicKey) {
  
    return data.reduce((curr, next) => {
    
      curr[next[dynamicKey]] = curr[next[dynamicKey]] || [];
      curr[next[dynamicKey]].push(next);
      return curr;
    }, {});
    
  }
  
  //calling the function and logging the output
  console.log(filterOnKey("zsm_name"));