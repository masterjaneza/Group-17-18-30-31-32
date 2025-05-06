# def open_or_senior(data):

#     res = []
    
#     for i in data:

#         age = i[0]
#         handicap = i[1]
        
#         if age >= 55 and handicap > 7:

#             res.append('Senior')

#         else:

#             res.append('Open')

#     return res



# nums = [1, 2, 3, 4, 5]



# for i in nums: 
#     print(i * 2)




def printer_error(s):
    
    err = 0
    
    for i in s:
        
        if i < 'a' or i > 'm':
            
            err += 1

    return f'{err}/{len(s)}'

print(printer_error('mmmmz'))