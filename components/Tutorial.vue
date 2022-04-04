
<template>
    <div class="container mx-auto content-wrap">
        <section class="w-full">
        <h1>Buttons</h1>
        <div class="sample-container">            
            <div class="block w-full">
                <button class="btn btn-primary">작성하기</button>
                <button class="btn btn-border">작성하기</button>
                <button class="btn btn-primary btn-small">작성하기</button>
                <button class="btn btn-border btn-small">작성하기</button>
            </div>
            
            <div class="block w-full mt-5">
                <button class="btn btn-primary rounded-full">작성하기</button>
                <button class="btn btn-border rounded-full">작성하기</button>
                <button class="btn btn-primary btn-small rounded-full">작성하기</button>
                <button class="btn btn-border btn-small rounded-full">작성하기</button>
            </div>

            <div class="block w-full mt-5">
                <button class="btn btn-withicon">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download</span>
                </button>
            </div>                
        </div>

        <div class="sample-container">
            <div class="block">
                <label class="input-label">입력폼 Text : disabled</label>
                <input type="text" disabled value="010-3434-9999" />
            </div>
            <div class="block">
                <label class="input-label">입력폼 Text</label>
                <input type="text" value="인풋 입력값" />
            </div>
            <div class="block">
                <label class="input-label">입력폼 Password</label>
                <input type="password" value="959493" />
            </div>
            <div class="block">
                <label class="input-label">입력폼 Number</label>
                <input type="number" value="959493" />
            </div>
            <div class="block">
                <label class="input-label">입력폼 Date</label>
                <input type="date" value="" />
            </div>            
        </div>

        <div class="sample-container">
                      
                <div class="flex -space-x-1 overflow-hidden">
                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_01.jpg" alt="">
                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_female_01.jpg" alt="">
                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_02.jpg" alt="">
                <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_03.jpg" alt="">
                </div>

                <div class="flex -space-x-2 overflow-hidden">
                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_01.jpg" alt="">
                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_female_01.jpg" alt="">
                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_02.jpg" alt="">
                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_03.jpg" alt="">
                </div>

                <div class="flex -space-x-2 overflow-hidden">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_01.jpg" alt="">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_female_01.jpg" alt="">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_02.jpg" alt="">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="../assets/img/sample_img/profile_male_03.jpg" alt="">
                </div>
            
        </div>
        </section>
        <section>
          <div class="sample-container">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
              <img class="w-full" src="../assets/img/sample_img/sunset.jpg" >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Tailwind css 카드 컴포넌트 예시</div>
                <p class="text-gray-600 text-base">
                 Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다.Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-4">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-4">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-4">#winter</span>
              </div>
            </div>
          </div>
          <div class="sample-container">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-xl lg:rounded-t-none lg:rounded-l-xl text-center overflow-hidden" :style="{backgroundImage: `url(${require('@/assets/img/sample_img/sunset.jpg')})`}" title="Mountain">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-4 flex flex-col justify-between">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Tailwind css 카드 컴포넌트 예시</div>
                  <p class="text-gray-600 text-base">Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다.Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다.</p>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="../assets/img/sample_img/profile_female_01.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  /*
  data() {
      return {
        emberPosts: []
      }
    },
    async fetch() {
      this.emberPosts = await fetch(
        'https://mber-web.e-inspot.com/api/v1/board/news/listData/1'
      ).then(res => res.json())
      .then(json => console.log(json))
    }
   */ 
}
</script>
