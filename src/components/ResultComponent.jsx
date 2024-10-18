import React from 'react';
import { Box, Typography, CircularProgress, Card, CardContent } from '@mui/material';

const ResultComponent = ({ percentage, noOfCorrect, noOfAttempted, totalMarks }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={0} p={4}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: 'white',
          fontFamily: 'Rubik',
          fontSize: 50,
          textShadow: '2px 2px 4px #CADCFC',
          background:'#0a003b',
          
        }}
      >
        Result
      </Typography>

      <Card
        variant="outlined"
        sx={{
          width: { md: '600px', xs: '90vw' },
          textAlign: 'center',
          backgroundColor: '#0a003b',
          borderColor: '#8AB6F9',
          color: '#E0E0E0',
          fontFamily: 'Rubik',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              Correct Answers:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              {noOfCorrect}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              Wrong Answers:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              {10 - noOfCorrect - (10 - noOfAttempted)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              Unsolved:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              {10 - noOfAttempted}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              Total Marks:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Rubik',
                color: 'white',
                marginBottom: '10px',
                fontSize: 26,
                textShadow: '2px 2px 4px blue',
              }}
            >
              {totalMarks}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Rubik',
              marginTop: '16px',
              fontStyle: 'italic',
              color: 'white',
              marginBottom: '10px',
              fontSize: 26,
              textShadow: '2px 2px 4px blue',
            }}
          >
            {percentage >= 40 ? 'Excellent job!!!' : 'Better Luck Next Time!'}
          </Typography>
        </CardContent>
      </Card>

      <Box position="relative" display="inline-flex" mt={4}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={180}
          thickness={6}
          sx={{ color: '#0f005a' }}
        />
        <CircularProgress
          variant="determinate"
          value={percentage ? percentage : 0}
          size={180}
          thickness={6}
          sx={{ color: '#03a9f4', position: 'absolute', left: 0 }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
          }}
        >
          <Typography
            variant="h5"
            color="white"
            sx={{ fontFamily: 'Rubik', textShadow: '2px 2px 2px blue' }}
          >
            {percentage}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultComponent;











































































// import React from 'react';
// import { Box, Typography, CircularProgress, Card, CardContent } from '@mui/material';

// const ResultComponent = ({percentage,noOfCorrect,noOfAttempted,totalMarks}) => {

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" gap={4} p={4}  >
//       <Typography variant="h4" gutterBottom sx={{color:'white',fontFamily:"Rubik",fontSize:50,textShadow: '2px 2px 4px #CADCFC'}} >Results</Typography>

//       <Card 
//   variant="outlined" 
//   sx={{ 
//     width: {md:'600px',xs:'90vw'}, 
//     textAlign: 'center', 
//     backgroundColor: '#0a003b',  
//     borderColor: '#8AB6F9',       
//     color: '#E0E0E0', 
//     fontFamily:"Rubik",            
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
//   }}
// >
//   <CardContent>
//     <Box sx={{display:'flex',justifyContent:'space-between'}}>
//     <Typography variant="h6" sx={{fontFamily:"Rubik", color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//       Correct Answers : 
//     </Typography>
//     <Typography variant="h6" sx={{fontFamily:"Rubik", color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//       {noOfCorrect}
//     </Typography>

//     </Box>

//     <Box sx={{display:'flex',justifyContent:'space-between'}}>
//     <Typography variant="h6" sx={{fontFamily:"Rubik", color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     Wrong Answers :
//     </Typography>
//     <Typography variant="h6" sx={{ fontFamily:"Rubik",color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     {10 - noOfCorrect-(10-noOfAttempted)}
//     </Typography>

//     </Box>
//     <Box sx={{display:'flex',justifyContent:'space-between'}}>
//     <Typography variant="h6" sx={{ fontFamily:"Rubik",color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     Unsolved :
//     </Typography>
//     <Typography variant="h6" sx={{fontFamily:"Rubik", color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     {10 - noOfAttempted}
//     </Typography>

//     </Box>
//     <Box sx={{display:'flex',justifyContent:'space-between'}}>
//     <Typography variant="h6" sx={{ fontFamily:"Rubik",color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     Total Marks :
//     </Typography>
//     <Typography variant="h6" sx={{ fontFamily:"Rubik",color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'}}>
//     {totalMarks}
//     </Typography>
//     </Box>

//     <Typography 
//       variant="body1" 
//       sx={{ 
//         fontFamily:"Rubik",
//         marginTop: '16px',        
//         fontStyle: 'italic',       
//         color: 'white',marginBottom: '10px',fontSize:26, textShadow: '2px 2px 4px blue'
//       }}
//     >
//       {
//         percentage >= 40 ? "Excellent job!!!":"Better Luck Next Time!"
//       }
//     </Typography>
//   </CardContent>
// </Card>

//       <Box position="relative" display="inline-flex" mt={4}>
//         <CircularProgress
//           variant="determinate"
//           value={100}
//           size={180}
//           thickness={6}
//           sx={{
//             color: '#0f005a', 
            
//           }}
//         />
//         <CircularProgress
//           variant="determinate"
//           value={percentage?percentage:0}
//           size={180}
//           thickness={6}
//           sx={{
//             color: '#03a9f4', 
//             position: 'absolute',
//             left: 0,
            
//           }}
//         />
//         <Box
//           position="absolute"
//           top="50%"
//           left="50%"
//           sx={{
//             transform: 'translate(-50%, -50%)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: '100px',
//             height: '100px',
//           }}
//         >
//           <Typography variant="h5" color="white" sx={{fontFamily:"Rubik", textShadow: '2px 2px 2px blue'}} >
//             {percentage}%
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ResultComponent;
